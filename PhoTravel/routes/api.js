const router = require('express').Router();


const apiUsuarioPerfile = require('./api/usuario-perfil');
const apiPhotographerPerfile = require('./api/photographer-perfil');
const allPhotographer = require('./api/all-photographer')

const { checkToken } = require('./middleware');

router.use('/usuario-perfil', apiUsuarioPerfile);
router.use('/photographer-perfil', checkToken, apiPhotographerPerfile);
router.use('/all-photographer', allPhotographer)




module.exports = router;