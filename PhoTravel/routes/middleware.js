const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const { getById } = require('../models/usuario-perfil-model');


const checkToken = async (req, res, next) => {
    // console.log(req);
    //el token está incluido
    if (!req.headers['authorization']) {
        return res.status(401).json({ error: 'Debes incluir la cabecera de autorización' })
    }

    //token correcto
    const token = req.headers['authorization'];

    let obj;
    try {
        obj = jwt.verify(token, process.env.SECRET_KEY)
        console.log(obj)
    } catch {
        return res.status(401).json({ error: 'El token está mal' });
    }

    if (dayjs().unix() > obj.expiredAt) {
        return res.status(401).json({ error: 'El token está caducado' });
    }

    const usuario = await getById(obj.usuarioId);

    req.user = usuario;
    // console.log(req.user)

    next();

}

module.exports = { checkToken }