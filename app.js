const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const history = require('connect-history-api-fallback');
const mongoose = require('mongoose')

const app = express()
const port = 3000


// // Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// eslint-disable-next-line no-undef
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(history({
//     index: './public/index.html'
// }))


// Rutas
app.get('/', (req, res) => {
    res.send('hola mundo!')
})
app.use('/api', require('./routes/nota'))
// Rutas de testeo
app.get('/test', function(req, res) {
    res.write('hello');
    res.end();
});

// Conexión a MongoDB
const uri = 'mongodb://localhost:27017/backend-node'
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(uri, options).then(
    () => {
        console.log('Conectó con MongoDB')
    },
    err => {
        err
    }
)


// Servidor escuchando
app.listen(port, () => {
    console.log(`Escuchando en el puerto http://localhost:${port}`)
})