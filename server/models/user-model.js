const mongoose = require('mongoose');

//create the user model

const schema = mongoose.Schema({
    phone: { type: 'string', required: true },
    activated: { type: 'boolean', required: true, default: false },

}, { timestap:true});



module.exports = mongoose.model('User', schema, 'users');

