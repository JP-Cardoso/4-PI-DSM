const IotBusiness = require('./iot-Business');

const insertData = async(request, h) => {
    try {
        const payload = request.payload;
        const data = {...payload};
        console.log('Estou na controlller',data);

        const result = await IotBusiness.insertData(data);
        return h.response(result).code(200)
    } catch (error) {
        console.error(error.message);
        return h.response(error.message).code(500);
    }
};

module.exports = {insertData};