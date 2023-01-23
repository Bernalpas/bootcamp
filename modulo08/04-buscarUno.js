



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

    //Insertamos un dato
    dbo.collection('personas').findOne({}, (error, result) => {
        if (error) {
            throw error;
        }else{
            console.log(`Los datos son: ${result.nombre} - ${result.apellido}`);
        }
    });
});


