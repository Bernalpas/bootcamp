const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index')
})

//Configuramos Multer
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log(file);
        callback(null, 'uploads')
    }, 
    filename: function (req, file, callback) {
        callback(null, `${file.originalname}`)
    }, 
});

//Pasamos la configuración a la librería
const uploads = multer({ storage: storage})

//Utilizamos la configuración como un middelware
app.post('/subir', uploads.single('miArchivo'), (req, res, next) => {

    const file = req.file;

    if(!file){
        const error = new Error('Error subiendo el Archivo')
        error.httpStatusCode = 400
        return next(error);
    }

    res.send(`Archivo <b>${file.originalname}</b> guardado correctamente`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor trabajando en ${PORT}`);
});
