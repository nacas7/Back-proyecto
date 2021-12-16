const router = require('express').Router();
const { registerPhotographer, getAll, deletedByIdPhotographer, getByInfo } = require('../../models/photographer-perfile-model');

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

// router.get('/photographer', async (req, res) => {
//     try {
//         const result = await getByInfo(req.body)
//         res.json(result)
//     } catch (err) {
//         res.json({ error: err.message })

//     }
// });

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

// router.get('/:idPhotographer', async (req, res) => {
//     console.log(result)
//     const result = await getByInfo(req.params.idusuarios)
//     res.json(result)

// });




router.post('/register', async (req, res) => {
    try {
        const result = await registerPhotographer(req.body, req.params.idusuarios)
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })

    }
});

router.delete('/:clienteId', async (req, res) => {
    try {
        const result = await deletedByIdPhotographer(req.params.clienteId)
        res.json(result)
    } catch (err) {
        res.json({ error: err.message })

    }
})


module.exports = router;