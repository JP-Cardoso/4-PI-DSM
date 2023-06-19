const UserRepository = require('./user-Repository');

const create = async (client) => {
    return UserRepository.save(client);
};

const findAll = async (options) => {
    return UserRepository.findAll();
};

const getById = async (id) => {
    return UserRepository.getById(id);
};

const updated = async (item) => {
    return UserRepository.updated(item)
};

const remove = async (id) => {
    return UserRepository.remove(id)
};

const login = async (item) => {
    return UserRepository.login(item)
}

module.exports = { create, findAll, getById, updated, remove, login }