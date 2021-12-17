
const router = require('express').Router();
const { getAll } = require('../../models/all-photographer-module')


router.get('/', async (req, res) => {

    try {
        const result = await getAll();
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })
    }
})


module.exports = router;

