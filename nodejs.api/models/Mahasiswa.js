// (4) buat schema data mahasiswa
const mongoose = require('mongoose')
const mahasiswaSchema = mongoose.Schema({
    nama : { type: String, requiread: true},
    alamat : { type: String, requiread: true},
    createdAt: { type: Date, default: Date,now}
})

module.exports = mongoose.model('Mahasiswa',mahasiswaSchema)