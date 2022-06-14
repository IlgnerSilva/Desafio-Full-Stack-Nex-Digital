const { InvalidArgumentError, InternalServerError } = require('../models/Error');
const User = require('../models/User');
const database = require('../../database/models');
const jwt = require('jsonwebtoken');

function createJWTToken(user){
    const payload = {
        id: user.id
    };
    const token = jwt.sign(payload, process.env.KEY_JWT);
    return token;
}

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
        try{
            const user = new User({name, email});
            user.addPassword(password)
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

    static async busca(req, res){
        const { email } = req.params;
        const user = await User.searchByEmail(email);
        return res.status(201).json(user);
    }

    static async login(req, res){
        const token = createJWTToken(req.user);
        res.set('Authorization', token);
        res.status(204).send();
    }

}

module.exports = UsersController