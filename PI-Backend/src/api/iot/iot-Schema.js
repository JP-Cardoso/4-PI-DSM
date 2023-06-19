const Joi = require('joi');

const insertDataPayload = {
    payload: Joi.object({
        temperature: Joi
            .number().precision(2).required(),
        moustre: Joi
            .number().precision(2).required(),
        dateInsert: Joi
            .date().iso().raw().custom((value, helpers) => {
                if (!value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/)) {
                    return helpers.error('any.invalid');
                }
                return value;
            }).required()
    })
};

module.exports = { insertDataPayload }






