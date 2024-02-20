const db = require('../config');
const { hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { SECRET } = require('../constants');
const { Op } = require('sequelize');


const Users = require('../database/models/Users');
const Events = require('../database/models/Events');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['user_id', 'name', 'idea_name', 'email', 'diagnosis', 'completed_challenges', 'completed_steps', 'completed_phases', 'completed_achievements'],
            order: [['name', 'ASC']],
            //order: [['user_id', 'ASC']],
        });
        res.status(200).send(users);
        /*
        const { rows } = await db.query('SELECT user_id, email FROM Users')

        return res.status(200).json({
            success: true,
            users: rows,
        })
        */
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
}

exports.getAllUserInfo = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await Users.findOne({
            where: { email },
            attributes: ['name', 'idea_name', 'diagnosis', 'completed_challenges', 'completed_steps', 'completed_phases', 'completed_achievements'],
            order: [['name', 'ASC']],
        });
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getUserId = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await Users.findOne({
            where: { email },
            attributes: ['user_id'],
        });
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getUserAuthorized = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.findOne({
            where: { email },
            attributes: ['authorized', 'name', 'idea_name', 'email', 'diagnosis', 'completed_challenges', 'completed_steps', 'completed_phases', 'completed_achievements', 'completed_topics'],
        });
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};



exports.getUserBasicInfo = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await Users.findOne({
            where: { email },
            attributes: ['name', 'idea_name', 'diagnosis'],
        });
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getUsersAuthorized = async (req, res) => {
    try {
        const users = await Users.findAll({
            where: {
                authorized: true,
            },
            attributes: ['name', 'idea_name', 'diagnosis', 'completed_challenges', 'completed_steps', 'completed_phases', 'completed_achievements', 'completed_topics'],
            order: [['name', 'ASC']],
        });
        res.status(200).send(users);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getUsersUnauthorized = async (req, res) => {
    try {
        const users = await Users.findAll({
            where: {
                authorized: false,
            },
            attributes: ['name', 'idea_name', 'diagnosis', 'completed_challenges', 'completed_steps', 'completed_phases', 'completed_achievements'],
            order: [['name', 'ASC']],
        });
        res.status(200).send(users);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

/*
exports.getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['name', 'email'],
            order: [['name', 'ASC']],
        });
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
 */

exports.register = async (req, res) => {
    const { name, idea_name, email, password } = req.body
    try {
        const hashedPassword = await hash(password, 10)

        await db.query(`INSERT INTO Users(name, idea_name, email, password, completed_challenges, completed_steps, completed_phases, completed_achievements) VALUES ('${name}', '${idea_name}', '${email}', '${hashedPassword}', 0, 0, 0, 0)`);


        return res.status(201).json({
            success: true,
            message: 'The registraion was succefull',
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            error: error.message,
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email } = req.body // Get the user data
        const payload = {
            email: email,
        };
        const token = await sign(payload, SECRET);
        const user = await Users.findOne({
            where: { email },
            attributes: ['diagnosis'],
        });
        console.log("Logged in successfully");
        return res
            .status(200)
            .cookie('token', token, { httpOnly: true })
            .json({
                success: true,
                message: 'Logged in successfully',
                token: token,
                diagnosis: user.diagnosis,
            });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};


exports.protected = async (req, res) => {
    try {
        return res.status(200).json({
            info: 'protected info',
        });
    } catch (error) {
        console.log("error: ", error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.logout = async (req, res) => {
    try {
        console.log("Logged out successfully");
        return res.status(200).clearCookie('token', { httpOnly: true }).json({
            success: true,
            message: 'Logged out succefully',
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            error: error.message,
        })
    }
}

exports.updateCompletedSteps = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.update(
            {
                completed_steps: req.body.steps,
            },
            {
                where: { email },
            },
        );
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.updateCompletedPhases = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.update(
            {
                completed_phases: req.body.phases,
            },
            {
                where: { email },
            },
        );
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getCompletedPhases = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.findOne({
            where: { email },
            attributes: ['completed_phases'],
        });
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.updateCompletedChallenges = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.update(
            {
                completed_challenges: req.body.challenges,
            },
            {
                where: { email },
            },
        );
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getCompletedChallenges = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.findOne({
            where: { email },
            attributes: ['completed_challenges'],
        });
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.updateDiagnosis = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.update(
            {
                diagnosis: req.body.diagnosis,
            },
            {
                where: { email },
            },
        );
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getDiagnosis = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.findOne({
            where: { email },
            attributes: ['diagnosis'],
        });
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.updateName = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.update(
            {
                name: req.body.name,
            },
            {
                where: { email },
            },
        );
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.updateIdeaName = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.update(
            {
                idea_name: req.body.idea,
            },
            {
                where: { email },
            },
        );
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.updateEmail = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.update(
            {
                email: req.body.email,
            },
            {
                where: { email },
            },
        );
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.updateCompletedTopics = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.update(
            {
                completed_topics: req.body.topics,
            },
            {
                where: { email },
            },
        );
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getCompletedTopics = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.findOne({
            where: { email },
            attributes: ['completed_topics'],
        });
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.updatePitchForm = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.update(
            {
                pitch_form_1: req.body.pitch_form_1,
                pitch_form_2: req.body.pitch_form_2,
                pitch_form_3: req.body.pitch_form_3,
                pitch_form_4: req.body.pitch_form_4
            },
            {
                where: { email },
            },
        );
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getPitchForm = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.findOne({
            where: { email },
            attributes: ['pitch_form_1', 'pitch_form_2', 'pitch_form_3', 'pitch_form_4'],
        });
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.updatePropriedadeForm = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.update(
            {
                propriedade_form_1: req.body.propriedade_form_1,
                propriedade_form_2: req.body.propriedade_form_2,
                propriedade_form_3: req.body.propriedade_form_3,
                propriedade_form_4: req.body.propriedade_form_4
            },
            {
                where: { email },
            },
        );
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getPropriedadeForm = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const user = await Users.findOne({
            where: { email },
            attributes: ['propriedade_form_1', 'propriedade_form_2', 'propriedade_form_3', 'propriedade_form_4'],
        });
        res.status(200).send(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.getUserEvents = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado

        // Consulta usando Sequelize com uma junção (join) entre Events e Users
        const events = await Events.findAll({
            where: { email },
            attributes: ['event_id', 'title', 'description', 'start_date', 'end_date', 'type'],
        });
        const mappedEvents = events.map((event) => ({
            ...event.toJSON(),
            start: event.start_date,
            end: event.end_date,
        }));
        res.status(200).json(mappedEvents);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.createUserEvent = async (req, res) => {
    try {
        const { title, description, start_date, end_date, type } = req.body;
        const email = req.user.email; // Email do usuário autenticado

        // Crie um novo evento
        const newEvent = await Events.create({
            title,
            description,
            start_date,
            end_date,
            type,
            email,
        });

        res.status(201).json(newEvent);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};

exports.deleteUserEvent = async (req, res) => {
    try {
        const { event_id } = req.body; // Recebe o event_id do corpo da solicitação
        const email = req.user.email;

        console.log('event_id:', event_id);
        console.log('email:', email);

        const event = await Events.findOne({
            where: {
                event_id: event_id,
                email: email,
            },
        });

        if (!event) {
            return res.status(404).json({ message: 'Evento não encontrado.' });
        }

        await Events.destroy({
            where: { event_id: event_id },
        });

        res.status(204).send(); // Resposta bem-sucedida sem conteúdo
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};



exports.getUserNextEvent = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const currentDate = new Date(); // Obtém a data atual

        // Consulta usando Sequelize com uma junção (join) entre Events e Users
        const event = await Events.findOne({
            where: {
                email,
                start_date: {
                    [Op.gt]: currentDate, // A data de início é posterior à data atual
                },
            },
            attributes: ['event_id', 'title', 'description', 'start_date', 'end_date', 'type'],
            order: [['start_date', 'ASC']],
        });

        if (!event) {
            // Não há eventos futuros para o usuário
            return res.status(404).json({ message: 'Nenhum evento futuro encontrado.' });
        }

        // Verifique se o evento é hoje e, se for, encontre o próximo evento que não seja hoje
        const isEventToday = event.start_date.toDateString() === currentDate.toDateString();
        if (isEventToday) {
            // Encontre o próximo evento que não seja hoje
            const nextEvent = await Events.findOne({
                where: {
                    email,
                    start_date: {
                        [Op.gt]: currentDate, // A data de início é posterior à data atual
                    },
                    event_id: {
                        [Op.ne]: event.event_id, // Exclua o evento atual
                    },
                },
                attributes: ['event_id', 'title', 'description', 'start_date', 'end_date', 'type'],
                order: [['start_date', 'ASC']],
            });

            if (!nextEvent) {
                // Não há outros eventos futuros para o usuário
                return res.status(404).json({ message: 'Nenhum evento futuro encontrado.' });
            }

            const mappedNextEvent = {
                ...nextEvent.toJSON(),
                start: nextEvent.start_date,
                end: nextEvent.end_date,
            };

            res.status(200).json(mappedNextEvent);
        } else {
            const mappedEvent = {
                ...event.toJSON(),
                start: event.start_date,
                end: event.end_date,
            };

            res.status(200).json(mappedEvent);
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};


exports.getUserTodayEvent = async (req, res) => {
    try {
        const email = req.user.email; // Email do usuário autenticado
        const currentDate = new Date(); // Obtém a data atual

        // Consulta usando Sequelize com uma junção (join) entre Events e Users
        const eventsToday = await Events.findAll({
            where: {
                email,
                start_date: {
                    [Op.gte]: currentDate, // A data de início é igual ou posterior à data atual
                },
                end_date: {
                    [Op.lte]: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59), // A data de término é até o final do dia
                },
            },
            attributes: ['event_id', 'title', 'description', 'start_date', 'end_date', 'type'],
            order: [['start_date', 'ASC']],
        });

        if (!eventsToday || eventsToday.length === 0) {
            // Não há eventos hoje para o usuário
            return res.status(404).json({ message: 'Nenhum evento hoje encontrado.' });
        }

        // Encontre o próximo evento que ocorre hoje
        const nextEvent = eventsToday.find(event => event.start_date > currentDate);

        if (nextEvent) {
            const mappedEvent = {
                ...nextEvent.toJSON(),
                start: nextEvent.start_date,
                end: nextEvent.end_date,
            };
            res.status(200).json(mappedEvent);
        } else {
            // Se não houver um próximo evento, pegue o último a acontecer
            const lastEvent = eventsToday[eventsToday.length - 1];
            const mappedEvent = {
                ...lastEvent.toJSON(),
                start: lastEvent.start_date,
                end: lastEvent.end_date,
            };
            res.status(200).json(mappedEvent);
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};
