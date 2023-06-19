const {server, plugins} = require("./server");

(async () => {
    await server.register(plugins);
    await server.start();
    console.log('Server started %s', server.info.uri);
    console.log(`Server started ${server.info.uri}`);

})();