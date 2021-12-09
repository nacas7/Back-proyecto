
const router = require('express').Router();
const { getAll } = require('../models/usuarios.model')

router.get('/', (req, res) => {
    const usuarios = getAll();
    res.json(usuarios)
})





module.exports = router;