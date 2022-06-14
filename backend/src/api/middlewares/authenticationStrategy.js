const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { InvalidArgumentError } = require('../models/Error');
const User = require('../models/User');

function checkUser(user){
    if(!user)
        throw new InvalidArgumentError('There is no user with this email.');
}

async function checkPassword(password, hashPassword){
    const validPassword = await bcrypt.compare(password, hashPassword);
    if(!validPassword)
        throw new InvalidArgumentError('Invalid email or password.');
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
)