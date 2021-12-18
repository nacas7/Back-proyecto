const router = require('express').Router();


const apiUsuarioPerfile = require('./api/usuario-perfil');
const apiPhotographerPerfile = require('./api/photographer-perfil');
const allPhotographer = require('./api/all-photographer')
const chat = require('./api/chat')

const { checkToken } = require('./middleware');

router.use('/usuario-perfil', apiUsuarioPerfile);
router.use('/photographer-perfil', checkToken, apiPhotographerPerfile);
router.use('/all-photographer', allPhotographer)
router.use('/chat', checkToken, chat);


module.exports = router;