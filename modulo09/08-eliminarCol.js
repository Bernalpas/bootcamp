






const mongoCliente = require('mongodb').MongoClient;

const MONGO = 'mongodb://localhost:27017/';
const DATA = 'educacionit'

const MONGOATLAS = 'mongodb+srv://bernimza:32KigfF3lyhQebl6@cluster0.pb66u.mongodb.net/educacionit?retryWrites=true&w=majority';

mongoCliente.connect(MONGOATLAS, (error, db) => {
    if (error) {
        throw error;
    }else{
        console.log(`App conectada a la Base de Datos: ${DATA}`);
    }

    const dbo = db.db(DATA);
    const coleccion = 'personas';

    dbo.collection(coleccion).drop((error, result) => {
        if (error) throw error;
        if (result) console.log(`Hemos eliminado la colección ${coleccion}`);
        
    });
});