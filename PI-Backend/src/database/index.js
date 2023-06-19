const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const UserModel = require('../models/User');
const IotModel = require('../models/Iot');

const connection = new Sequelize(dbConfig);

UserModel.init(connection);
IotModel.init(connection);

module.export = connection;