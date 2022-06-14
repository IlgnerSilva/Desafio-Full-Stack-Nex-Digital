const { InvalidArgumentError } = require('./Error');

module.exports = {
    stringFieldNotNull: (value, name) => {
        if(!isNaN(parseFloat(value)) && isFinite(value) || value.length === 0 )
            throw new InvalidArgumentError(`It is necessary to fill in the ${name} field`);
    },

    minimumFieldSize: (value, name, min) => {
        console.log(value)
        if(value.length < min)
            throw new InvalidArgumentError(`the ${name} field must be longer than ${min} characters`);
    }
};