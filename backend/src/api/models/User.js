const validations = require('./validations');
const database = require('../../database/models');
const { InvalidArgumentError } = require('./Error');
const bcript = require('bcrypt');

class User {
    constructor (user){
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.hashPassword = user.hashPassword;

        this.validate()
    }

    async addUser(){
        if(await database.users.findOne({where:{email: this.email}})){
            throw new InvalidArgumentError('E-mail already registered.');
        };
        return await database.users.create(this)
    }

    async addPassword(password){
        validations.minimumFieldSize(password, 'password', 8);
        this.hashPassword = await User.generateHashPassword(password)
    }

    static async searchByEmail(email){
        const user = await database.users.findOne({where:{email: email}});
        if(!user)
            return null;
        
        return new User(user)
    }

    validate(){
        validations.stringFieldNotNull(this.name, 'name');
        validations.stringFieldNotNull(this.email, 'email');
        // validations.stringFieldNotNull(this.password, 'password');
    }



    static generateHashPassword(password){
        return bcript.hash(password, 12)
    }
}

module.exports = User;