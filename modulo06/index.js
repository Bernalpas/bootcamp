

//Llamo a las librerías que instalé
const express = require('express');
const path = require('path');

//Ejecuto una función para utilizar los métodos de express
const app = express();
const PORT = 8080;


//Funciones Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

//Utilizo los métodos http para responder al cliente
app.get('/hola', (peticion, respuesta) => {
    console.log(`Hey!! alguien está haciendo click en nuestra app!!`);
    respuesta.send(`Hola soy el match o el end point /hola`)
});


//Métodos GET
app.get('/', (req, res) => {
    console.log(`Hey!! alguien está haciendo click en nuestra app!!`);
    res.send(`Hola Gente, gracias por visitar mi App`)
});

app.get('/json', (req, res) => {
    res.send({
        saludo: "Hola Mundo, soy un JSON"
    });
});

app.get('/status', (req, res) => {
    res.status(200).send({
        saludo: "Hola Mundo, todo OK!!!"
    });
});

app.get('/html', (req, res) => {
    res.status(404).send('<h1>Página No encontrada</h1>')
});

app.get('/datos', (req, res) => {
    //console.log(req);
    res.send(`Recibimos un montón de datos que no los usamos todos`)
});

//Método POST
app.post('/enviar', (req, res) => {

    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let provincia = req.body.provincia;
    let dni = req.body.dni;
    
    console.log(nombre);

    let datos = `Tus datos han sido recibidos`;
    res.send(datos)
});


app.post('/masdatos', (req, res) => {

    //Desestructuring - Desestructuración
    const { nombre, apellido, provincia, dni } = req.body;

    if(nombre == "" || apellido == "" || dni == ""){
        res.send(`Por favor rellene los campos obligatorios: Nombre, Apellido y DNI`)
    }else{
        console.log(`Los datos recibidos desde el Front son: ${nombre}. ${apellido}, ${provincia}, ${dni}`);
        res.send(`Los datos recibidos desde el Front son: ${nombre}. ${apellido}, ${provincia}, ${dni}`)
    }
});

app.put('/actualizar/:id', (req, res) => {
    const nombre = req.body.nombre;
    const id = req.params.id;

    console.log(`Los datos recibidos son ${nombre} - ${id}`);

    res.send({ 
        nombre: nombre,
        id: id,
    })
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


