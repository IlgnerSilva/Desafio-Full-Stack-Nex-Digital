const { InvalidArgumentError, InternalServerError } = require('../models/Error');
const User = require('../models/User');
const database = require('../../database/models');
const jwt = require('jsonwebtoken');
const blacklist = require('../../../redis/manipulateBlacklist');

function createJWTToken(user){
    const payload = {
        id: user.id
    };
    const token = jwt.sign(payload, process.env.KEY_JWT, {expiresIn: '10m'});
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
        console.log(req.body)
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

    static async searchUserById(req, res){
        const { id } = req.params;
        const user = await User.searchById(id)
        return res.status(201).json(user);
    }

    static async login(req, res){
        const token = createJWTToken(req.user);
        res.set('Authorization', token);
        console.log()
        return res.status(200).json({nome: token});
    }

    static async logout(req, res){
        try{
            const token = req.token;
            await blacklist.add(token);
            res.status(201).send();
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }
    }

}

module.exports = UsersController