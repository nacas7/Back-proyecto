const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const { getById } = require('../models/users.model');


const checkToken = (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.status(401).json({ error: 'Debes incluir la cabecera de autorización' })
    }

    const token = req.headers['authorization'];
    let obj;

    try {
        obj = jwt.verify(token, process.env.SECRET_KEY)
    } catch {
        return res.status(401).json({ error: 'El token está mal' });
    }

    if (dayjs().unix() > obj.expiredAt) {
        return res.status(401).json({ error: 'El token está caducado' });
    }

    const usuario = await getById(obj.usuarioId)

    req.user = usuario;
    console.log(req.user)

    next();

}




module.exports = {
    checkToken
}