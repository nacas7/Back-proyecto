const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { createRegister, getByEmail } = require('../../models/users.model');



router.post('/register', async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password);
        req.body.repit_password = bcrypt.hashSync(req.body.repit_password);
        const result = await createRegister(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const usuario = await getByEmail(req.body.email)

    if (!usuario) {
        return res.json({ error: 'Error de usuario y/o password' })
    }


    const iguales = bcrypt.compareSync(req.body.password, usuario.password)
    if (iguales) {
        res.json('funciona')
    } else {
        return res.json({ error: 'Error de usuario y/o password' })
    }



})




module.exports = router;