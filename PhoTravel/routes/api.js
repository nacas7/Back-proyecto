const router = require('express').Router();
const { checkToken } = require('./middleware');


const apiUsuarioPerfile = require('./api/usuario-perfil');
const apiPhotographerPerfile = require('./api/photographer-perfil');


router.use('/usuario-perfil', apiUsuarioPerfile);
router.use('/photographer-perfil', checkToken, apiPhotographerPerfile);




module.exports = router;