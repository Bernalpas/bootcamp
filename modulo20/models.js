//Es la configuración de la colección Users de la DB

//Importamos las librerías necesarias
const mongoose = require('mongoose'); 
const { Schema } = require('mongoose');

//Estructura de la colección que vamos a crear
const userSchema = new Schema({
    username: {
        type: 'string',
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    nombre: {
        type: String, 
        required: true
    },
    apellido: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
})

//Exportamos la configuración con la colección
module.exports = mongoose.model('users', userSchema);