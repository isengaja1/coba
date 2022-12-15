const mongoose = require('mongoose');

const dataLogs = mongoose.model('datalogs', new mongoose.Schema({
    idNode: String,
    waterLevel: Number,
    timestamp: String,
}));

module.exports = dataLogs;