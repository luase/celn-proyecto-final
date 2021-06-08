const express = require('express')
const router = express.Router()

// Create a route for GET /user/test
router.get('/test', function(req, res) {
    res.write('hello');
    res.end();
});

// Importar mi modelo
const Nota = require('../models/nota')

// Agregar una Nota
router.post('/nota-nueva', async (req, res) => {
    const body = req.body
    try {
        const notaDB = await Nota.create(body)
        res.status(200).json(notaDB)
    } catch (e) {
        return res.status(500).json({
            mensaje: 'ocurrió un error al intentar enviar la nota',
            e
        })
    }
})

// Obtener una Nota
router.get('/notas/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const notaDB = await Nota.findOne({ _id })
        res.status(200).json(notaDB)
    } catch (e) {
        return res.status(500).json({
            mensaje: 'ocurrió un error al intentar obtener la nota',
            e
        })
    }
})

// Obtener todas las Notas
router.get('/notas', async (req, res) => {
    try {
        const notaDB = await Nota.find({})
        res.status(200).json(notaDB)
    } catch (e) {
        return res.status(500).json({
            mensaje: 'ocurrió un error al intentar obtener las notas',
            e
        })
    }
})

// Borrar una Nota
router.delete('/notas/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const notaDB = await Nota.findByIdAndDelete({ _id })
        if(!notaDB){
            return res.status(500).json({
                mensaje: 'no se encontró la nota que se desea borrar'
            })
        }
        res.status(200).json(notaDB)
    } catch (e) {
        return res.status(500).json({
            mensaje: 'ocurrió un error al intentar borrar la nota',
            e
        })
    }
})

// actualizar una Nota
router.put('/notas/:id', async (req, res) => {
    const _id = req.params.id
    const body = req.body
    try {
        const notaDB = await Nota.findByIdAndUpdate(_id, body, {new: true})
        res.status(200).json(notaDB)
    } catch (e) {
        return res.status(500).json({
            mensaje: 'ocurrió un error al intentar borrar la nota',
            e
        })
    }
})

module.exports = router