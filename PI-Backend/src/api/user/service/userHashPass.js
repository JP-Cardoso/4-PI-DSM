const bcrypt = require('bcrypt');
const Hapi = require('@hapi/hapi');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const genHash = async (pass) => {
    const salt = await bcrypt.genSalt(12);
    const passHash = await bcrypt.hash(pass, salt);
    return passHash;
};

const comparePass = async (pass, hash) => {
    const check = await bcrypt.compare(pass, hash);
    return check;
}

const genToken = (user) => {
    const secret = process.env.SECRET;
    console.log(secret);
    const token = jwt.sign({
        id: user.id
    }, secret)
    return token;
}


const checkToken = async(request, h) => {
    
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        return h.response({msg: 'Acesso negado"'}).code(401)
    };

    try {

        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
        
    } catch (error) {
        return h.response({msg: 'Token inválido!'}).code(401)

    }

}

module.exports = {genHash, genToken, checkToken, comparePass}