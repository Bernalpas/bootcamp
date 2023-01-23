const express = require('express');

//Ejecutamos express y guardamos el puerto
const PORT = 3000;
const app = express();
app.use(express.json());

//Conexión a la Base de Datos de Mongo
//1. Creamos la constante para utilizar mongodb
const mongoCliente = require('mongodb').MongoClient;

//2. Pasamos la url local de la ubicación de la db de mongo y la db
const MONGO = 'mongodb://localhost:27017/';
const DATA = 'educacionit'

//3. Pasamos la url remota de la ubicación de la db de mongo y la db
const MONGOATLAS = '';

//4. Conectamos nuestra app a Mongo
mongoCliente.connect(MONGO, (error, db) => {
    if (error) {
        throw error;
    }else{
        console.log(`App conectada a la Base de Datos: ${DATA}`);
    }

    //Seteamos la base de datos elegida
    const dbo = db.db(DATA);

    //Creamos la colección
    dbo.createCollection ("personas", (error, result) => {
        if (error) {
            throw error;
        }else{
            console.log(`Colección 'Personas' creada.`);
        }
    }); 

    let dato = { 
        nombre: "Juan",
        apellido: "Pérez",
        edad: 20
    }

    //Insertamos un dato
    dbo.collection('personas').insertOne(dato, (error, result) => {
        if (error) {
            throw error;
        }else{
            console.log(`Insertamos 1 documento a la colección`);
        }
    });
});

app.get('/', (req, res) => {
    res.send(`<h1>Estamos trabajando con las bases de datos de MongoDB</h1>`);
});

//Aplicación en escucha por el puerto asignado
app.listen(PORT, () => {
    console.log(`Aplicación activa y trabajando en el Puerto ${PORT}`);
});

//En caso de error, me avisa
app.on('Error', (err) => {
    console.log(`Tenemos un error en el Espacio`);
}); 