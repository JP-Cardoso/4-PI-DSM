const {reportAnalitic, report} = require('./report-Controller');
const schema = require('./report-Schema');

const plugin = {
    name: 'report-v1-route',
    verion: 1,
    register: (server => {
        server.route([
            {
                method: "GET",
                path: "/report-analitic",
                options: {
                    handler: reportAnalitic
                }
            },
            {
                method: 'GET',
                path: '/reports',
                options: {
                    handler: report
                }
            }
        ]);
    })
};

module.exports = plugin;