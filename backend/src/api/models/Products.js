const validations = require('./validations');
const database = require('../../database/models');

class Products {
    constructor(products){
        this.id = products.id;
        this.name = products.name;
        this.description = products.description;
        this.imageURL = products.imageURL;
    }

    async addProduct(){
        return await database.products.create(this);
    }

    validate(){
        validations.stringFieldNotNull(this.name, 'name');
        validations.stringFieldNotNull(this.description, 'description');
        validations.stringFieldNotNull(this.imageURL, 'imageURL');
    }

}

module.exports = Products;