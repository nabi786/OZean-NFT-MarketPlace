const joi = require('joi')


const validator = (data)=>{
    const Schema = joi.object({


    }).options({ allowUnknown: true })

    return Schema.validate(data)
}


module.exports = validator