const IotModel = require('../../models/Iot');

const insertData = async (data) => {
    console.log('Estou no repository', data);
    const result = await IotModel.create(data, { raw: true });
    return result;
};

module.exports = { insertData }