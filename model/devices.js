const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');
const { Schema } = mogoose;

const devicesSchema = new Schema({
    nome: String,
    kwh: Number,
    corrente: Number,
    voltagem: Number,
    fp: Number
})

module.exports = mongoose.model('devices', devicesSchema);