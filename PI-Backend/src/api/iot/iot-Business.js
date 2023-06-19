const IotRepository = require('./iot-Repository');

const insertData = async (data) => {
    return await IotRepository.insertData(data);
};

module.exports = {insertData}