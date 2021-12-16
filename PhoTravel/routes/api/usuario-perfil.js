const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { createRegister, getByEmail, upDateDatos, getById, getAll, deletedByIdUsuario } = require('../../models/usuario-perfil-model');
const { createToken } = require('../../utils');


// router.get('/:idUsuario', async (req, res) => {

//     let result;
//     try {
//         result = await getById(req.params.idUsuario)

//     } catch (err) {
//         res.json({ error: err.message })
//     }
//     if (!result) {
//         return res.json({ error: 'El id no es correcto' });
//     }
//     res.json(result)
// });

router.get('/', async (req, res) => {
    try {
        const result = await getAll();
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })
    }
});

router.get('/:idUsuario', async (req, res) => {
    const result = await getById(req.params.idUsuario)
    res.json(result)
})

router.post('/register', async (req, res) => {

    try {
        req.body.password = bcrypt.hashSync(req.body.password);
        const result = await createRegister(req.body);
        res.json(result);

    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const usuario = await getByEmail(req.body.email)
    // console.log(usuario)

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


});

router.put('/:clienteId', async (req, res) => {
    try {

        req.body.password = bcrypt.hashSync(req.body.password);
        const result = await upDateDatos(req.params.clienteId, req.body);
        res.json(result)
    } catch (err) {
        res.json({ error: err.message });

    }
});

router.delete('/:clienteId', async (req, res) => {
    try {
        const result = await deletedByIdUsuario(req.params.clienteId)
        res.json(result)
    } catch (err) {
        res.json({ error: err.message });
    }

});



module.exports = router;