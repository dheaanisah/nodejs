// (1)
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bosyParser = require ('body-parser')
require ('dotenv/config')

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
console.log(`server running on $ { process.env.PORT}`);

})