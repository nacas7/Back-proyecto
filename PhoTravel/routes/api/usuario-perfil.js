const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { createRegister, getByEmail, upDateDatos, getById, getAll, deletedByIdUsuario, updatePrivate, updatePublic } = require('../../models/usuario-perfil-model');
const { createToken, } = require('../../utils');
const { deletedByIdPhotographer } = require('../../models/photographer-perfile-model');
const { deleteByMessage } = require('../../models/chat-model')
const { checkToken } = require('../middleware')

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

router.get('/idUsuario', checkToken, async (req, res) => {
    const result = await getById(req.user.idusuarios)
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


router.delete('/', checkToken, async (req, res) => {
    try {
        await deletedByIdPhotographer(req.user.idusuarios)
        await deleteByMessage(req.user.idusuarios)
        await deletedByIdUsuario(req.user.idusuarios)

        res.json('usuario borrado')
    } catch (err) {
        res.json({ error: err.message });
    }

});

router.put('/public', checkToken, async (req, res) => {
    try {
        const result = await updatePublic(req.user.idusuarios, req.body)
        res.json(result)

    } catch (err) {
        res.json({ error: err.message })
    }
});

router.put('/private', checkToken, async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password);
        const result = await updatePrivate(req.user.idusuarios, req.body)
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })
    }
})



module.exports = router;