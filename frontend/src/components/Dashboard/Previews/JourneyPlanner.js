import React from "react";
import { Col, Row } from "react-bootstrap";

import Info from "../../../images/dashboard/info.png";
import Slash from "../../../images/dashboard/calendar-slash.png";


export default function JourneyPlanner(props) {

    function getDayOfMonthSuffix(day) {
        if (day >= 11 && day <= 13) {
            return 'th';
        }
        const lastDigit = day % 10;
        switch (lastDigit) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }

    const currentDate = new Date();

    const daysOfWeekNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    const month = months[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();
    const dayOfMonthSuffix = getDayOfMonthSuffix(dayOfMonth);
    const dayOfWeek = daysOfWeekNames[currentDate.getDay()]; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    let title = "";
    if (props.nextTitle)
        title = props.nextTitle.split(' ')[0];

    const todayStartFlag = props.todayStart;
    const todayEndFlag = props.todayEnd;

    const nextStartFlag = props.nextStart;
    const nextEndFlag = props.nextEnd;

    let todayStartHour = 0;
    let todayEndHour = 0;

    let nextDay = 0;
    let nextMonth = 0;
    let nextStartHour = 0;
    let nextEndHour = 0;

    let nextHaveEvent = false;
    if (nextStartFlag && nextEndFlag) {
        // Certifique-se de que dateFlag esteja no formato adequado (por exemplo, "2023-09-26T14:30:00")
        // Se não estiver, você pode precisar convertê-lo para o formato apropriado antes de continuar

        // Extraia os componentes de data e hora
        const nextStartDateParts = nextStartFlag.split('T');
        const nextEndDateParts = nextEndFlag.split('T');
        if (nextStartDateParts.length === 2) {
            const nextStartDate = nextStartDateParts[0];
            const nextStartTime = nextStartDateParts[1];

            const nextStartDateComponents = nextStartDate.split('-');
            const nextStartTimeComponents = nextStartTime.split(':');

            if (nextStartDateComponents.length === 3 && nextStartTimeComponents.length === 3) {
                nextDay = nextStartDateComponents[2];
                nextMonth = nextStartDateComponents[1];
                nextStartHour = `${nextStartTimeComponents[0]}:${nextStartTimeComponents[1]}`;
            }
        }
        if (nextEndDateParts.length === 2) {
            const nextEndTime = nextEndDateParts[1];

            const nextEndTimeComponents = nextEndTime.split(':');

            if (nextEndTimeComponents.length === 3) {
                nextEndHour = `${nextEndTimeComponents[0]}:${nextEndTimeComponents[1]}`;
            }
        }
        nextHaveEvent = true;
    }

    let todayHaveEvent = false;
    if (todayStartFlag && todayEndFlag) {
        // Certifique-se de que dateFlag esteja no formato adequado (por exemplo, "2023-09-26T14:30:00")
        // Se não estiver, você pode precisar convertê-lo para o formato apropriado antes de continuar

        // Extraia os componentes de data e hora
        const todayStartDateParts = todayStartFlag.split('T');
        const todayEndDateParts = todayEndFlag.split('T');
        console.log("todayStartDateParts: ", todayStartDateParts);
        console.log("todayEndDateParts: ", todayEndDateParts);
        if (todayStartDateParts.length === 2) {
            const todayStartTime = todayStartDateParts[1];
            const todayStartTimeComponents = todayStartTime.split(':');

            if (todayStartTimeComponents.length === 3) {
                todayStartHour = `${todayStartTimeComponents[0]}:${todayStartTimeComponents[1]}`;
            }
        }
        if (todayEndDateParts.length === 2) {
            const todayEndTime = todayEndDateParts[1];
            const todayEndTimeComponents = todayEndTime.split(':');
            if (todayEndTimeComponents.length === 3) {
                todayEndHour = `${todayEndTimeComponents[0]}:${todayEndTimeComponents[1]}`;
            }
        }
        todayHaveEvent = true;
    }

    const flagDate = new Date(props.nextStart);
    const nextTypedMonth = months[flagDate.getMonth()];
    const nextDayOfMonthSuffix = getDayOfMonthSuffix(flagDate.getDay()-1);
    const dayOfWeekIndex = flagDate.getDay();
    const nextDayOfWeek = daysOfWeekNames[dayOfWeekIndex];
    return (
        <div className="h-100">
            <div>
                <p className="px-2 pt-3 pb-2 border-light-gray-bottom">
                    <Row>
                        <Col md={10}>
                            Journey Planner
                        </Col>
                        <Col md={1} className="">
                            <img src={Info} className="settingsImage pointer pl-3" alt="" />
                        </Col>
                    </Row>
                </p>
            </div>
            <div className="journey-planner text-center p-2">
                <div className="month">
                    <p className="text-dark-white">{month}</p>
                </div>
                <div>
                    <div>
                        <div>
                            <div className="dayOfMonth">
                                <p>{dayOfMonth}</p>
                            </div>
                            <div className="dayOfMonthSuffix">
                                <p>{dayOfMonthSuffix}</p>
                            </div>
                        </div>
                        <div className="dayOfWeek">
                            <p>{dayOfWeek}</p>
                        </div>
                    </div>
                    {todayHaveEvent &&
                        <>
                            <div className="slash">
                                <img src={Slash} className="" alt="" />
                            </div>
                            <div className="event-time">
                                <div className="event-text">
                                    <p>today's event</p>
                                </div>
                                <div className="event-hour">
                                    <p>{todayStartHour}-{todayEndHour}</p>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <div className="next-event">
                    <p className="text-dark-white">Next Event</p>
                </div>
                {nextHaveEvent ?
                    <div className="next-event-info">
                        <div>
                            <div className="next-date">
                                <p className="w200">{nextTypedMonth} {nextDay}{nextDayOfMonthSuffix}</p>
                            </div>
                            <div className="next-dayOfWeek">
                                <p className="w200">{nextDayOfWeek}</p>
                            </div>
                        </div>
                        <div className="light-gray-vertical-slash" />
                        <div>
                            <div className="next-title">
                                <p className="w200">{title}</p>
                            </div>
                            <div className="next-event-hour">
                                <p className="w200">{nextStartHour}-{nextEndHour}</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="next-event-havent">create event</div>
                }
            </div>
        </div>
    );
};