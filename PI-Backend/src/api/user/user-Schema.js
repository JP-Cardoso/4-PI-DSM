const Joi = require('joi');

const createdUser = {
    payload: Joi.object({
        name: Joi
            .string().min(3).required().uppercase(),
        password: Joi
            .string().min(4).required().trim(),
        cpf: Joi
            .string().max(11).trim()
    })
};

const auth = {
    payload: Joi.object({
        password: Joi
            .string().min(4).required().trim(),
        cpf: Joi
            .string().max(11).trim().required()
    })
}

const getUserById = {
    params: Joi.object({
        id: Joi
            .number().integer().required()
    })
};

const updatedUserById = {
    params: Joi.object({
        id: Joi
            .number().integer().required()
    }),
    payload: Joi.object({
        name: Joi
            .string().min(3).uppercase(),
        password: Joi
            .string().min(4).trim(),
        cpf: Joi
            .string().max(11).trim()
    })
};

const removedUserById = {
    params: Joi.object({
        id: Joi
            .number().integer().required()
    })
};


module.exports = { createdUser, getUserById, updatedUserById, removedUserById, auth }