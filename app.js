const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const history = require('connect-history-api-fallback');

const app = express()

// Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Middleware para Vue.js router modo history
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')))
app.use(history())

// Rutas
app.get('/', (req, res) => {
    res.send('hola mundo!')
})

// eslint-disable-next-line no-undef
app.set('puerto', process.env.PORT || 3000)

app.listen(app.get('puerto'), () => {
        console.log(`Escuchando en el puerto http://localhost:${app.get('puerto')}`)
})