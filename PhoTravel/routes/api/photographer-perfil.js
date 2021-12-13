const router = require('express').Router();
const { registerPhotographer } = require('../../models/photographer-perfile-model');


router.post('/register', async (req, res) => {
    try {
        const result = await registerPhotographer(req.body)
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })

    }
});


module.exports = router;