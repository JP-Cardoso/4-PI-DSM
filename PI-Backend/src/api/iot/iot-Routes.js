const {insertData} = require('./iot-Controller');
const schema = require('./iot-Schema');

const plugin = {
    name: 'iot-v1-route',
    verion: 1,
    register: (server => {
        server.route([
            {
                method: "POST",
                path: "/data-iot",
                options: {
                    // validate: schema.insertDataPayload,
                    handler: insertData
                }
            }
        ]);
    })
};


module.exports = plugin;