const validations = require('../models/Validations');
const database = require('../../database/models');
const { InvalidArgumentError } = require('./Error')

class User {
    constructor (user){
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;

        this.validate()
    }

    async addUser(){
        if(await database.users.findOne({where:{email: this.email}})){
            throw new InvalidArgumentError('E-mail already registered.');
        };
        return await database.users.create(this)
    }

    validate(){
        validations.stringFieldNotNull(this.name, 'name');
        validations.stringFieldNotNull(this.email, 'email');
        // validations.stringFieldNotNull(this.password, 'password');
        validations.minimumFieldSize(this.password, 'password', 8);
    }
}

module.exports = User;