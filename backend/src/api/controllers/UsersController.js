const { InvalidArgumentError, InternalServerError } = require('../models/Error');
const User = require('../models/User');
const database = require('../../database/models');

class UsersController {
    static async searchAllUsers(req, res){
        try {
            const listAllUsers = await database.users.findAll();
            return res.status(200).json(listAllUsers);
        }
        catch(err){
            return res.status(500).json(err.message);
        }
    }

    static async registerUser(req, res){
        const  { name, email, password } = req.body;
        console.log(req.body)
        try{
            const user = new User({name, email, password})
            await user.addUser()
            return res.status(201).json()
        }
        catch(err){
            if(err instanceof InvalidArgumentError){
                res.status(422).json({erro: err.message});
            }else if(err instanceof InternalServerError){
                res.status(500).json({erro: err.message})
            }else{
                res.status(500).json({erro: err.message})
            }
        }
    }
}

module.exports = UsersController