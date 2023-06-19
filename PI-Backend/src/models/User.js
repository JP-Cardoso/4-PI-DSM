const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            cpf: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'user'
        })
    }
};

module.exports = User