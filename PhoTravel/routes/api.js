const router = require('express').Router();

const apiUsuarios = require('./api/users');


router.use('/users', apiUsuarios);




module.exports = router;