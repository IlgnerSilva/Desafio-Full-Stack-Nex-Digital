const { InvalidArgumentError, InternalServerError } = require('../models/Error');
const Products = require('../models/Products');
const { middlewareAuthentication } = require('../middlewares')

class ProductsController {
    static async registerProduct(req, res){
        const { name, description, imageURL } = req.body;
        try{
            console.log(req.body)
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
}

module.exports = ProductsController;