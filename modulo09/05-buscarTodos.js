


//Conexión a la Base de Datos de Mongo
//1. Creamos la constante para utilizar mongodb
const mongoCliente = require('mongodb').MongoClient;

//2. Pasamos la url local de la ubicación de la db de mongo y la db
const MONGO = 'mongodb://localhost:27017/';
const DATA = 'educacionit'

//3. Pasamos la url remota de la ubicación de la db de mongo y la db
const MONGOATLAS = 'mongodb+srv://bernimza:32KigfF3lyhQebl6@cluster0.pb66u.mongodb.net/educacionit?retryWrites=true&w=majority';


//4. Conectamos nuestra app a Mongo
mongoCliente.connect(MONGOATLAS, (error, db) => {
    if (error) {
        throw error;
    }else{
        console.log(`App conectada a la Base de Datos: ${DATA}`);
    }

    //Seteamos la base de datos elegida
    const dbo = db.db(DATA);

    //Insertamos un dato
    dbo.collection('personas').find({}).toArray((error, result) => {
        if (error) {
            throw error;
        }else{
            console.log(result);
        }
    });
});


