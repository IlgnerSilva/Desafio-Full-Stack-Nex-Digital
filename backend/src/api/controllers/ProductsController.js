const { InvalidArgumentError, InternalServerError } = require('../models/Error');
const Products = require('../models/Products');
const database = require('../../database/models');
const { middlewareAuthentication } = require('../middlewares')

class ProductsController {
    static async registerProduct(req, res){
        const { name, description, imageURL } = req.body;
        try{
            const product = new Products({name, description, imageURL});
            product.addProduct();
            return res.status(201).json(product);
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

    static async searchAllProducts(req, res){
        try{
            const listAllProducts = await database.products.findAll();
            return res.status(200).json(listAllProducts)
        }
        catch(err){
            return res.status(500).json(err.message)
        }
    }
}

module.exports = ProductsController;