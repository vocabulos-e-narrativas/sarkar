const { check } = require('express-validator');
const db = require('../config');
const { compare } = require('bcryptjs');

const Users = require('../database/models/Users.js');

//password
const password = check('password').isLength({ min: 6, max: 15 }).withMessage('Password has to be between 6 and 15 characters.');

//email
const email = check('email').isEmail().withMessage('Please provide a valid email.');

//check if email exists
const emailExists = check('email').custom(async (value) => {
    const rows = await Users.findOne({
        attributes: ['email'],
        where: { email: value }
    });
    console.log(rows);
    if (rows) {
        throw new Error('Email already exists.')
    }
})

//login validation
const loginFieldsCheck = check('email').custom(async (value, { req }) => {
    const user = await Users.findOne({
        attributes: ['user_id', 'email', 'password'], // Include 'password' to compare later
        where: { email: value }
    });
    if (!user) {
        throw new Error('Email does not exist.');
    }
    const validPassword = await compare(req.body.password, user.dataValues.password);
    if (!validPassword) {
        throw new Error('Wrong password.');
    }
    req.user = user; // Attach user information to the request
});

module.exports = {
    registerValidation: [email, password, emailExists],
    loginValidation: [loginFieldsCheck],
}