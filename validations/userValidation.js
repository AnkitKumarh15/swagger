const joi = require('joi')

const validateUser = (user)=>{
    const schema = joi.object({
        name : joi.string().required(),
        company: joi.string().required(),
        price: joi.number().required()
    })
    return schema.validate(user);
}

module.exports = validateUser;
