const router = require('express').Router();
const { registerPhotographer, getById } = require('../../models/photographer-perfile-model');



router.get('/:idUsuario', async (req, res) => {
    let result;
    try {
        result = await getById(req.params.idUsuario)
    } catch (err) {
        res.json({ error: err.message })
    }
    if (!result) {
        return res.json({ error: 'El id no es correcto' });
    }
    res.json(result)

});

router.post('/register', async (req, res) => {
    try {
        const result = await registerPhotographer(req.body, req.user.idusuarios)
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })

    }
});


module.exports = router;