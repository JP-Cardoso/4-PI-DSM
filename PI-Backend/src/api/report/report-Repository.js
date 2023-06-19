const IotModel = require('../../models/Iot');
const service = require('./service/report')

const data = async () => {
    const result = await IotModel.findAll({limit: 50, order: [['dateInsert', 'DESC']],raw: true});
    return service.media(result)
};

const report = async () => {
    const result = await IotModel.findAll({limit: 50, order: [['dateInsert', 'DESC']], raw: true});
    return result
}

module.exports = {data, report}