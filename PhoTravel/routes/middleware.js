const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const { getById } = require('../models/photographer-perfile-model');


const checkToken = async (req, res, next) => {
    //el token está incluido
    if (!req.headers['authorization']) {
        return res.status(401).json({ error: 'Debes incluir la cabecera de autorización' })
    }

    //token correcto
    const token = req.headers['authorization'];

    let obj;
    try {
        obj = jwt.verify(token, process.env.SECRET_KEY)
    } catch {
        return res.status(401).json({ error: 'El token está mal' });
    }

    //token no esté caducado

    if (dayjs().unix() > obj.expiredAt) {
        return res.status(401).json({ error: 'El token está caducado' });
    }

    const usuario = await getById(obj.usuarioId);


    req.user = usuario;
    next();

}

module.exports = { checkToken }