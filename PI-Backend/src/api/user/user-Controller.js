const UserBusiness = require('./user-Business')


const create = async (request, h) => {

    try {
        const payload = request.payload;
        const user = {
            name: payload.name,
            cpf: payload.cpf,
            password: payload.password,
        }

        const result = await UserBusiness.create(user);

        return h.response(result).code(201);
    } catch (error) {
        return h.response(error.message).code(500);
    }

};

const login = async (request, h) => {
    try {
        const payload = request.payload;
        const item = {
            password: payload.password,
            cpf: payload.cpf
        };
        const result = await UserBusiness.login(item);
        console.log(result);
        return h.response(result).code(201)
    } catch (error) {
        return h.response(error.message).code(500);
    }
}

const findAll = async (request, h) => {
    try {
        const result = await UserBusiness.findAll();
        console.log(result);

        return h.response(result).code(200)
    } catch (error) {
        console.error('Erro ao retornar usuários', error.message);
        return h.response(error.message).code(500);
    }

};

const getById = async (request, h) => {
    try {
        const {id} = request.params;
        const result = await UserBusiness.getById(id);

        return h.response(result).code(200)
    } catch (error) {
        console.error('Erro ao retornar usuário por id', error.message);
        return h.response(error.message).code(500);
    }
};

const updated = async (request, h) => {
    try {
        const {id} = request.params;
        const user = {...request.payload};
        const item = {...user, id};

        const result = await UserBusiness.updated(item);
        return h.response(result).code(200)

    } catch (error) {
        return h.response(error.message).code(500);
    }
    
};

const remove = async (request, h) => {
        try {
            const {id} = request.params;
            const result = await UserBusiness.remove(id);
            return h.response(result).code(200)
        } catch (error) {
            return h.response(error.message).code(500);
        }
};

module.exports = { create, findAll, getById, updated, remove, login}