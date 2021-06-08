const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notaSchema = new Schema({
    nombre: { type: String, required: [true, "el campo 'nombre' es requerido"] },
    description: String,
    usuarioId: String,
    date: { type: Date, default: DateNow },
    activo: { type: Boolean, default: true }
})

const Nota = mongoose.model('Nota', notaSchema)
module.exports = Nota