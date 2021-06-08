"use strict";

var express = require('express');

var morgan = require('morgan');

var cors = require('cors');

var path = require('path');

var history = require('connect-history-api-fallback');

var app = express(); // Middleware

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
})); // Middleware para Vue.js router modo history
// eslint-disable-next-line no-undef

app.use(express["static"](path.join(__dirname, 'public')));
app.use(history()); // Rutas

app.get('/', function (req, res) {
  res.send('hola mundo!');
}); // eslint-disable-next-line no-undef

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log("Escuchando en el puerto http://localhost:".concat(app.get('puerto')));
});
//# sourceMappingURL=app.js.map