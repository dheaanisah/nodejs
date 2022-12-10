// (1)
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
require ('dotenv/config')

// (6) body parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

// (7) import routes mahasiswa, dll
const mahasiswaRoutes = require('./routes/mahasiswa')
const authRoutes = require('./routes/auth')

// (8) daftarkan mahasiswaRoutes ke express
app.use('/mahasiswa',mahasiswaRoutes)
app.use('/auth', authRoutes)
// (3) koneksi ke mongodb
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser : true, useUnifiedTopology : true})
let db = mongoose.connection 

//jika error
db.on('error', console.error.bind(console, 'Error establishing a database connection'))

//jika succes
db.once('open', () => {
    console.log('Database is connected');
})

// (2) listen port
app.listen(process.env.PORT, ()=> {
    console.log(`server running on ${ process.env.PORT}`);
    
})