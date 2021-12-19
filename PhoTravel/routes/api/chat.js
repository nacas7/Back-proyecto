const router = require('express').Router();
const { createMessage, getAllSent, getAllBy } = require('../../models/chat-model')

//todos los mensajes que el usuario envia
router.get('/message', async (req, res) => {
    try {
        const result = await getAllSent(req.user.idusuarios)
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })
    }
});


//todos los mensajes que ha recibido
router.get('/received', async (req, res) => {
    try {

        const result = await getAllBy(req.user.idusuarios)
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })
    }
})


router.post('/message', async (req, res) => {
    try {
        const result = await createMessage(req.body, req.user.idusuarios)
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })
    }
});



module.exports = router;