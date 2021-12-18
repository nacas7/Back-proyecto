
const router = require('express').Router();
const { getAll, getByInfo } = require('../../models/all-photographer-module')


router.get('/', async (req, res) => {

    try {
        const result = await getAll();
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })
    }
});
router.get('/:idUsuario', async (req, res) => {

    try {
        const result = await getByInfo(req.params.idUsuario)
        res.json(result)

    } catch (err) {
        res.json({ error: err.message })
    }
})


module.exports = router;

