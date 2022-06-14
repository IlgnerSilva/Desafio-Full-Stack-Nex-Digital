const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { InvalidArgumentError } = require('../models/Error');
const User = require('../models/User');

const blacklist = require('../../../redis/manipulateBlacklist');

function checkUser(user){
    if(!user)
        throw new InvalidArgumentError('There is no user with this email.');
}

async function checkPassword(password, hashPassword){
    const validPassword = await bcrypt.compare(password, hashPassword);
    if(!validPassword)
        throw new InvalidArgumentError('Invalid email or password.');
}

async function checkTokenInBlacklist(token){
    const blacklistToken = await blacklist.containToken(token);
    if(blacklistToken)
        throw new jwt.JsonWebTokenError('Invalid token by logout.');
}

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, async (email, password, done) => {
        try{
            const user = await User.searchByEmail(email);
            checkUser(user)
            await checkPassword(password, user.hashPassword);

            done(null, user);
        }catch(err){
            done(err)
        }
    })
);

passport.use(
    new BearerStrategy(
        async (token, done) => {
            try{
                await checkTokenInBlacklist(token);
                const payload = jwt.verify(token, process.env.KEY_JWT);
                const user = await User.searchById(payload.id);
                done(null, user, { token: token });
            }catch(err){
                done(err)
            }
        }
    )
)