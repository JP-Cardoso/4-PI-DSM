const reportRepository = require('./report-Repository');

const data = async () => {
    return await reportRepository.data();
};

const reports = async () => {
    return await reportRepository.report();
};

module.exports = {data, reports}