const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { createRegister, getByEmail } = require('../../models/users.model');
const { createToken } = require('../../utils');




router.post('/register', async (req, res) => {
    console.log(req.body)
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
        res.json({ token: createToken(usuario) });
    } else {
        return res.json({ error: 'Error de usuario y/o password' })
    }

    //clase día 23/11/2021 parte 2 MINUTO 1:00:34


})




module.exports = router;