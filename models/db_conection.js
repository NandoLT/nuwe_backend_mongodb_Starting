'use strict'

const mongoose = require('mongoose');
const { MONGO_URI } = require('../config'); 

mongoose.connection.on('error', err => {
    console.log('Error de conexión: ', err);
    process.exit(1);
});

mongoose.connection.once('open', () => {
    console.log('Conectado a MongoDB en ', mongoose.connection.name);
})

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose.connection