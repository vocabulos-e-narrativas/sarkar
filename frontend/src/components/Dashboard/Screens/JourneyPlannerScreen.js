import React, { useState, useEffect, useCallback, useContext } from "react";
import {
    Row,
    Col,
    Container,
    Accordion,
    Modal,
    Button,
    Form
} from "react-bootstrap";
import User from "../../../components/Dashboard/User";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import back from "../../../images/dashboard/back.png";
import next from "../../../images/dashboard/next.png";
import plus from "../../../images/dashboard/plus.png";
import trashCan from "../../../images/dashboard/trash-can-solid.svg";

import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";

const localizer = momentLocalizer(moment);

function CustomToolbar(toolbar) {
    const { auth } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const [errorMessage, setErrorMessage] = useState('An error has occurred. Reload the page and try again.');
    const [showLoginError, setShowLoginError] = useState(false);

    function addLeadingZero(number) {
        return number < 10 ? "0" + number : number;
    }

    const goToBack = () => {
        toolbar.onNavigate("PREV");
    };

    const goToNext = () => {
        toolbar.onNavigate("NEXT");
    };

    const currentDate = moment(toolbar.date).format("MMMM YYYY");

    const [showModal, setShowModal] = useState(false);

    const handleShowEventModal = () => {
        setShowModal(true);
    };

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        startDay: "",
        startMonth: "",
        startHour: "",
        startMinute: "",
        endDay: "",
        endMonth: "",
        endHour: "",
        endMinute: "",
        type: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // Realize a validação dos campos aqui
        if (
            !formData.title ||
            !formData.description ||
            !formData.startDay ||
            !formData.startMonth ||
            !formData.startHour ||
            !formData.startMinute ||
            !formData.endDay ||
            !formData.endMonth ||
            !formData.endHour ||
            !formData.endMinute ||
            !formData.type
        ) {
            // Mostre uma mensagem de erro se algum campo estiver em branco
            console.log("Por favor, preencha todos os campos.");
            setErrorMessage("Por favor, preencha todos os campos.");
            setShowLoginError(true);
        } else {
            // Crie strings para as datas de início e término no formato esperado
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1; // Os meses em JavaScript são baseados em zero, então adicionamos 1.
            const currentDayOfMonth = currentDate.getDate();

            const selectedStartMonth = parseInt(formData.startMonth, 10);
            const selectedStartDay = parseInt(formData.startDay, 10);

            let year = currentYear;

            if (
                selectedStartMonth < currentMonth ||
                (selectedStartMonth === currentMonth && selectedStartDay < currentDayOfMonth)
            ) {
                year += 1;
            }

            console.log("year: ", year);
            const startDatetime = `${year}-${addLeadingZero(formData.startMonth)}-${addLeadingZero(formData.startDay)}T${formData.startHour}:${formData.startMinute}:00.000Z`;
            const endDatetime = `${year}-${addLeadingZero(formData.endMonth)}-${addLeadingZero(formData.endDay)}T${formData.endHour}:${formData.endMinute}:00.000Z`;

            if (endDatetime <= startDatetime) {
                setErrorMessage("Start date cannot be greater or equal than end date.");
                setShowLoginError(true);
            } else {
                // Envie os dados do formulário para o servidor ou realize outras ações
                console.log("Título:", formData.title);
                console.log("Descrição:", formData.description);
                console.log("Data de Início:", startDatetime);
                console.log("Data de Término:", endDatetime);
                console.log("Tipo:", formData.type);
                if (auth) {
                    axios.post(
                        'http://localhost:5000/auth/createUserEvent',
                        {
                            title: formData.title,
                            description: formData.description,
                            start_date: startDatetime,
                            end_date: endDatetime,
                            type: formData.type
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                            withCredentials: true,
                        }
                    )
                        .then((response) => {
                            console.log('Dados do formulário enviados com sucesso.');
                            setShowLoginError(false);
                        })
                        .catch((error) => {
                            console.error('Falha ao enviar os dados do formulário: ', error);
                            setErrorMessage(error.response.data.error);
                            setShowLoginError(true);
                        });
                }
                setShowModal(false);
                // Feche o modal após o envio bem-sucedido
            }
        }
    };

    const generateOptions = (maxValue, start) => {
        const options = [];
        for (let i = start; i <= maxValue; i++) {
            options.push(i.toString());
        }
        return options;
    };


    const daysInMonth = {
        1: 31, // Janeiro
        2: 28, // Fevereiro (assumindo que não é ano bissexto)
        3: 31, // Março
        4: 30, // Abril
        5: 31, // Maio
        6: 30, // Junho
        7: 31, // Julho
        8: 31, // Agosto
        9: 30, // Setembro
        10: 31, // Outubro
        11: 30, // Novembro
        12: 31, // Dezembro
    };

    return (
        <div className="rbc-toolbar">
            <span className="rbc-toolbar-label">{currentDate}</span>
            <span className="rbc-btn-group">
                <button type="button" onClick={goToBack}>
                    <img src={back} className="" alt="" />
                </button>
                <button type="button" onClick={goToNext}>
                    <img src={next} className="" alt="" />
                </button>
            </span>
            <br />
            <span className="rbc-toolbar-text">Select a day to schedule an event</span>
            <div className="btn rbc-toolbar-add-event" onClick={handleShowEventModal}>
                <Row>
                    <Col md={2}>
                        <img src={plus} className="plus" alt="add event" />
                    </Col>
                    <Col>
                        <p>New event</p>
                    </Col>
                </Row>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)} className="eventModal">
                <Modal.Header>
                    <Modal.Title>Create Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showLoginError && <div className="alert alert-danger alert-font text-center mb-3">{errorMessage}</div>}
                    <Form>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="description" className="mt-1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} />
                        </Form.Group>
                        <Row className="mt-1">
                            <Col>
                                <Form.Group controlId="startMonth">
                                    <Form.Label>Start Month</Form.Label>
                                    <Form.Control as="select" name="startMonth" value={formData.startMonth} onChange={handleChange}>
                                        <option value="">Selecione um mês</option> {/* Opção padrão vazia */}
                                        {generateOptions(12, 1).map((month) => (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="endMonth">
                                    <Form.Label>End Month</Form.Label>
                                    <Form.Control as="select" name="endMonth" value={formData.endMonth} onChange={handleChange}>
                                        <option value="">Selecione um mês</option> {/* Opção padrão vazia */}
                                        {generateOptions(12, 1).map((month) => (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col>
                                <Form.Group controlId="startDay">
                                    <Form.Label>Start Day</Form.Label>
                                    <Form.Control as="select" name="startDay" value={formData.startDay} onChange={handleChange}>
                                        <option value="">Selecione um dia</option> {/* Opção padrão vazia */}
                                        {generateOptions(formData.startMonth ? daysInMonth[formData.startMonth] : 31, 1).map((day) => (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="endDay">
                                    <Form.Label>End Day</Form.Label>
                                    <Form.Control as="select" name="endDay" value={formData.endDay} onChange={handleChange}>
                                        <option value="">Selecione um dia</option> {/* Opção padrão vazia */}
                                        {generateOptions(formData.endMonth ? daysInMonth[formData.endMonth] : 31, 1).map((day) => (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col>
                                <Form.Group controlId="startHour">
                                    <Form.Label>Start Hour</Form.Label>
                                    <Form.Control as="select" name="startHour" value={formData.startHour} onChange={handleChange}>
                                        <option value="">Selecione uma hora</option> {/* Opção padrão vazia */}
                                        {generateOptions(23, 0).map((hour) => (
                                            <option key={hour} value={hour}>
                                                {hour}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="endHour">
                                    <Form.Label>End Hour</Form.Label>
                                    <Form.Control as="select" name="endHour" value={formData.endHour} onChange={handleChange}>
                                        <option value="">Selecione uma hora</option> {/* Opção padrão vazia */}
                                        {generateOptions(23, 0).map((hour) => (
                                            <option key={hour} value={hour}>
                                                {hour}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col>
                                <Form.Group controlId="startMinute">
                                    <Form.Label>Start Minute</Form.Label>
                                    <Form.Control as="select" name="startMinute" value={formData.startMinute} onChange={handleChange}>
                                        <option value="">Selecione um minuto</option> {/* Opção padrão vazia */}
                                        {generateOptions(59, 0).map((minute) => (
                                            <option key={minute} value={minute}>
                                                {minute}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="endMinute">
                                    <Form.Label>End Minute</Form.Label>
                                    <Form.Control as="select" name="endMinute" value={formData.endMinute} onChange={handleChange}>
                                        <option value="">Selecione um minuto</option> {/* Opção padrão vazia */}
                                        {generateOptions(59, 0).map((minute) => (
                                            <option key={minute} value={minute}>
                                                {minute}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="type" className="mt-1">
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select" name="type" value={formData.type} onChange={handleChange}>
                                <option value="">Selecione um tipo</option> {/* Opção padrão vazia */}
                                <option value="Appointments">Appointments</option>
                                <option value="Potential Customers">Potential Customers</option>
                                <option value="Key Journey Milestones">Key Journey Milestones</option>
                                <option value="Customers">Customers</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Create Event
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

function CustomMonthHeader({ date }) {
    return (
        <div className="custom-month-header">
            {moment(date).format("dddd")[0]}
        </div>
    );
}

export default function JourneyPlannerScreen(props) {

    const { auth } = useContext(AuthContext);
    const [events, setEvents] = useState([]);
    const [eventTitlesByType, setEventTitlesByType] = useState({});
    const token = localStorage.getItem('token');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleSelectEvent = useCallback((event) => {
        setSelectedEvent(event);
        setIsOpen(true);
    }, []);

    const getEvents = () => {
        if (auth) {
            axios.get('http://localhost:5000/auth/getUserEvents', {
                headers: {
                    Authorization: `Bearer ${token}` // Adicione o token de autenticação
                },
                withCredentials: true, // Send cookies with the request
            })
                .then((res) => {
                    console.log("Events - res.data: ", res.data);
                    setEvents(res.data);

                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const groupEventsByType = (events) => {
        const titlesByType = {};

        events.forEach((event) => {
            if (titlesByType[event.type]) {
                titlesByType[event.type].push(event.title);
            } else {
                titlesByType[event.type] = [event.title];
            }
        });

        setEventTitlesByType(titlesByType);
    };

    useEffect(() => {
        // Carregue os dados de eventos do arquivo JSON
        //setEvents(eventsData);
        getEvents();
    }, [auth, token]);

    useEffect(() => {
        // Esta função será executada sempre que "events" for atualizado
        groupEventsByType(events);
    }, [events]);

    const closeModal = () => {
        setSelectedEvent(null);
        setIsOpen(false);
    };

    const deleteEvent = async (event_id) => {
        try {
            const response = await axios.delete('http://localhost:5000/auth/deleteUserEvent', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: { event_id: event_id }, // Envie o event_id no corpo da solicitação
                withCredentials: true, // Envie cookies com a solicitação
            });

            // Verifique a resposta aqui, pode haver informações úteis ou mensagens de erro nela
            console.log(response);

            // Atualize a lista de eventos após a exclusão bem-sucedida
            getEvents();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Row className="px-3">
            <Col md={4}>
                <Row className="dashboard-user-infos-gray-widgets-journey-planner m-2 p-2">
                    <Container>
                        <Row className="pt-2 pb-3 border-light-gray-bottom">
                            <User image={props.image} name={props.name} idea={props.idea} action={props.action} />
                        </Row>
                        <Row className="px-3">
                            <Accordion defaultActiveKey="0" className="w-100">
                                {Object.keys(eventTitlesByType).map((eventType, index) => (
                                    <Accordion.Item key={index} eventKey={index}>
                                        <Row className="border-light-gray-bottom">
                                            <Accordion.Header>{eventType}</Accordion.Header>
                                        </Row>
                                        <Row className="">
                                            <Accordion.Body>
                                                <ul>
                                                    {eventTitlesByType[eventType].map((eventTitle, eventIndex) => (
                                                        <li key={eventIndex}>{eventTitle}</li>
                                                    ))}
                                                </ul>
                                            </Accordion.Body>
                                        </Row>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Row>
                    </Container>
                </Row>
            </Col>
            <Col md={8} className="dashboard-panel py-2">
                <Container className="business-plan p-5">
                    <p className="px-2 pt-2 pb-1 border-light-gray-bottom">Calendar</p>
                    <div className="px-5">
                        <Modal show={isOpen} onHide={closeModal} className="eventModal">
                            <Modal.Header>
                                {selectedEvent && (
                                    <>
                                        <Modal.Title>
                                            Event Details |
                                            <span className="modal-title-type"> {selectedEvent.type}</span>
                                            <img src={trashCan} className="trash-can pointer" alt="trash-can" onClick={() => deleteEvent(selectedEvent.event_id)} />
                                        </Modal.Title>
                                    </>
                                )}
                            </Modal.Header>
                            <Modal.Body>
                                {selectedEvent && (
                                    <>
                                        <Row>
                                            <Col>
                                                <h5>{selectedEvent.title}</h5>
                                            </Col>
                                            <Col className="text-right mr-3">
                                                <p>{selectedEvent.start.split('T')[1].split(':')[0]}:{selectedEvent.start.split('T')[1].split(':')[1]} - {selectedEvent.end.split('T')[1].split(':')[0]}:{selectedEvent.end.split('T')[1].split(':')[1]}</p>
                                            </Col>
                                        </Row>
                                        <p>{selectedEvent.description}</p>
                                    </>
                                )}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={closeModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            onSelectEvent={handleSelectEvent}
                            views={{ month: true }}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 620, width: 920 }}
                            popup
                            selectable
                            components={{
                                toolbar: CustomToolbar,
                                month: {
                                    header: CustomMonthHeader,
                                },
                            }}
                        />
                    </div>
                </Container>
            </Col>
        </Row>
    );
};



