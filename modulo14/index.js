
const express = require('express');
const PORT = 3001;
const app = express();
const faker = require('faker');
const fs = require('fs');
const { check, validationResult } = require('express-validator');

app.use(express.json());


//Creación de datos para probar nuestras apis sin db
app.get('/api', (req, res) => {
    
    let infoArray = [];
    
    console.log(faker.name.firstName());
    console.log(faker.name.lastName());
    
    for (let index = 0; index < 25; index++) {
        infoArray.push({
            name: faker.name.firstName(),
            email: faker.internet.email(), 
            trabajo: faker.name.jobTitle(),
            ubicacion: faker.random.locale()
        })
    }
    
    fs.writeFile('./datosFaker.json', JSON.stringify(infoArray), (err, data) => {
        if (err) throw err;
        console.log('Array completo!!');
    });

    res.send('Los datos han sido exitosos!');

})

//descargas de archivos
app.get('/descarga', (req, res) =>{
    res.download('./doc/hola.pdf', 'nombrepordefectodelarchivo.pdf')
});

//sin express-validator
app.post('/form', (req, res) =>{
    const nombre = req.body.nombre
    const { nombres } = req.body
    res.send(nombre, nombres)
})

//con express-validator
app.post('/formulario', [
    check('nombre').isLength({min:5}),
    check('email').isEmail(),
    check('edad').isNumeric(),
    check('movile').isMobilePhone()
], (req, res) =>{
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(422).json({errores: errores})
    }

    const nombre = req.body.nombre;
    const email = req.body.email;
    const edad = req.body.edad;

    res.send(`Tus datos han sido recibidos: ${nombre} - ${email} - ${edad}`)
    console.log(`Tus datos han sido recibidos: ${nombre} - ${email} - ${edad}`)

})

app.listen(PORT, ()=>{
    console.log(`Servidor trabajando en ${PORT}`);
})



