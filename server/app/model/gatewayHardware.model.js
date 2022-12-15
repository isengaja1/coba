const mongoose = require('mongoose');

const gatewayHardware = mongoose.model('gateways', new mongoose.Schema({
    name: String,
    token: String,
    status: String,
    createdAt: Date
}));

module.exports = gatewayHardware;