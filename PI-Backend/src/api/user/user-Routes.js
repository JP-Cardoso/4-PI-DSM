const { create, findAll, getById, updated, remove, login } = require('./user-Controller');
const schema = require('./user-Schema')

const plugin = {
    name: 'user-v1-route',
    verion: 1,
    register: (server => {
        server.route([
            {
                method: "POST",
                path: "/users",
                options: {
                    validate: schema.createdUser,
                    handler: create
                }
            },
            {
                method: "POST",
                path: "/auth/user",
                options: {
                    validate: schema.auth,
                    handler: login
                }
            },
            {
                method: "GET",
                path: "/users",
                options: {
                    // validate: schema.findAll,
                    handler: findAll
                }
            },
            {
                method: "GET",
                path: "/user/{id}",
                options: {
                    validate: schema.getUserById,
                    handler: getById
                }
            },
            {
                method: "PUT",
                path: "/user/{id}",
                options: {
                    validate: schema.updatedUserById,
                    handler: updated
                }
            },
            {
                method: "DELETE",
                path: "/user/{id}",
                options: {
                    validate: schema.removedUserById,
                    handler: remove
                }
            },
        ]);
    })
};


module.exports = plugin;