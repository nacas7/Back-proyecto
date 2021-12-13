const router = require('express').Router();
const { registerPhotographer } = require('../../models/photographer-perfile-model');
const { checkToken } = require('../middleware')


router.get('/', (req, res) => {
    res.json(req.user)
})


router.post('/register', checkToken, async (req, res) => {
    try {
        const result = await registerPhotographer(req.body)
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })

    }
});


module.exports = router;