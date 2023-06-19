const Hapi = require("@hapi/hapi");
const routes = require('./src/config/routes');
require('./src/database/index');


const server = Hapi.server({
    port: 8005,
    host: "localhost",
    routes: {
        cors: {
            origin: ['*'], // an array of origins or 'ignore'
            headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match', 'Accept-language'], // all default apart from Accept-language
            additionalHeaders: ['cache-control', 'x-requested-with', 'Access-Control-Allow-Origin']
        }
    }
});

const plugins = [
    {
        plugin: routes, options: {
            // /home/joao/Área de Trabalho/PI/4-PI/src
            routesBaseDir: "./src/api"
        }
    }
]


module.exports = { server, plugins };