const router = require('express').Router();


const apiUsuarioPerfile = require('./api/usuario-perfil');
const apiPhotographerPerfile = require('./api/photographer-perfil');

const { checkToken } = require('./middleware');

router.use('/usuario-perfil', apiUsuarioPerfile);
router.use('/photographer-perfil', checkToken, apiPhotographerPerfile);




module.exports = router;