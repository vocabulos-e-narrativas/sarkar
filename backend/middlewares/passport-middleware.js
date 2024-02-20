const passport = require('passport')
const { Strategy } = require('passport-jwt')
const { SECRET } = require('../constants')
const Users = require('../database/models/Users.js');
const db = require('../config')

const cookieExtractor = function (req) {
    let token = null
    if (req && req.cookies) token = req.cookies['token']
    return token
}

const opts = {
    secretOrKey: SECRET,
    jwtFromRequest: cookieExtractor,
}

passport.use(
    new Strategy(opts, async ({ email }, done) => {
        try {
            const user = await Users.findOne({
                attributes: ['user_id', 'email'],
                where: { email: email }
            });
            if (!user) {
                throw new Error('401 not authorized')
            }
            return await done(null, user.dataValues)
        } catch (error) {
            console.log(error.message)
            done(null, false)
        }
    })
)