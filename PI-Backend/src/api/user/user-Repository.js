const UserModel = require('../../models/User');
const { genHash, genToken, comparePass } = require('./service/userHashPass')

const save = async (user) => {

    const { name, password, cpf } = user;
    const hash = await genHash(password)
    const newUser = {
        name,
        cpf,
        password: hash
    }
    const result = await UserModel.create(newUser);
    return result;
};

const findAll = async () => {
    const result = await UserModel.findAll({ raw: true });
    return result
};

const getById = async (id) => {
    const result = await UserModel.findByPk(id, { raw: true });
    return result
};

const updated = async (item) => {
    const { id, name, password, cpf } = item;
    const result = await UserModel.update(
        { name, password, cpf }, {
        where: {
            id
        }
    }, { raw: true }
    );

    return result
};

const remove = async (id) => {
    const result = await UserModel.destroy({
        where: {
            id
        }
    }, { raw: true });
    return result
};

const login = async (item) => {
    const { password, cpf } = item
    const result = await UserModel.findOne({ where: { cpf } }, { raw: true });
    const checkPass = await comparePass(password, result.password);
    if (!checkPass) {
        console.error('User no existed');
    } else {
        token = genToken(result)
    }
    return  {result,token};
};

module.exports = { save, findAll, getById, updated, remove, login }