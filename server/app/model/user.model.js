const mongoose = require('mongoose');

const users = mongoose.model('users', new mongoose.Schema({
    fullName: String,
    phone: String,
    password: String,
    email: String
}));

module.exports = users;