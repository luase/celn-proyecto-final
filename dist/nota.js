"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var notaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "el campo 'nombre' es requerido"]
  },
  description: String,
  usuarioId: String,
  date: {
    type: Date,
    "default": DateNow
  },
  activo: {
    type: Boolean,
    "default": true
  }
});
var Nota = mongoose.model('Nota', notaSchema);
module.exports = Nota;
//# sourceMappingURL=nota.js.map