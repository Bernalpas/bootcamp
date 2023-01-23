


const mongoCliente = require('mongodb').MongoClient;

const MONGO = 'mongodb://localhost:27017/';
const DATA = 'educacionit'

const MONGOATLAS = '';

mongoCliente.connect(MONGO, (error, db) => {
    if (error) {
        throw error;
    }else{
        console.log(`App conectada a la Base de Datos: ${DATA}`);
    }

    const dbo = db.db(DATA);
    const actualizar = { nombre: "Mario" };
    const nuevoDato = { $set: { apellido: "Messi"} };

    dbo.collection('personas').updateOne(actualizar, nuevoDato, (error, result) => {
        if (error) {
            throw error;
        }else{
            console.log('Hemos actualizado 1 documento.');
        }
    }); 

    dbo.collection('personas').updateMany(actualizar, nuevoDato, (error, result) => {
        if (error) {
            throw error;
        }else{
            console.log('Hemos actualizado 1 documento.');
        }
    });
});