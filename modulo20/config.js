
const mongoose = require('mongoose');

const MONGO = 'mongodb://localhost:27017/educacionit'

mongoose.set('strictQuery', false);
//mongoose.set('strictQuery', true);

const conexion = mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () =>{
    console.log(`Conexión a la Database correcta - MONGOLOCAL`);
});

mongoose.connection.on('error', () =>{
    console.log(`Conexión a la Database NO encontrada - URL: ${MONGO}`);
})

module.exports = conexion;
