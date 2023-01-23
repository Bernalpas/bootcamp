const express = require('express');

//Ejecutamos express y guardamos el puerto
const PORT = 3000;
const app = express();

//Conexión a la Base de Datos de Mongo
//1. Creamos la constante para utilizar mongodb
const mongoCliente = require('mongodb').MongoClient;

//2. Pasamos la url local de la ubicación de la db de mongo y la db
const MONGO = 'mongodb://localhost:27017/educacionit';

//3. Pasamos la url remota de la ubicación de la db de mongo y la db
const MONGOATLAS = 'mongodb+srv://bernimza:32KigfF3lyhQebl6@cluster0.pb66u.mongodb.net/educacionit?retryWrites=true&w=majority';

//4. Conectamos nuestra app a Mongo
mongoCliente.connect(MONGOATLAS, (error, db) => {
    if (error) {
        throw error;
    }else{
        console.log(`App conectada a la Base de Datos: ${MONGO}`);
    }
});

app.get('/', (req, res) => {
    res.send(`<h1>Estamos trabajando con las bases de datos de MongoDB</h1>`);
});

//Aplicación en escucha por el puerto asignado
app.listen(PORT, () => {
    console.log(`Aplicación activa y trabajando en el Puerto ${PORT} y Conectado a Mongo Atlas`);
});

//En caso de error, me avisa
app.on('Error', (err) => {
    console.log(`Tenemos un error en el Espacio`);
})