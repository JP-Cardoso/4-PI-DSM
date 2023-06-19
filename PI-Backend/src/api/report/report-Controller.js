const reportBusiness = require('./report-Business');

const reportAnalitic = async(request, h) => {
    try {
        const result = await reportBusiness.data();
        console.log(result);
        return h.response(result)
    } catch (error) {
        console.error(error);
    }
};

const report = async(request, h) => {
    try {
        const result = await reportBusiness.reports();
        return h.response(result)
    } catch (error) {
        console.error();
    }
};

module.exports = {reportAnalitic, report}