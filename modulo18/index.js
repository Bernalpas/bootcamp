const express = require('express');
const app = express();
const PORT = 9000;

//middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importamos JWT
const jwt = require('jsonwebtoken');

//creamos nuestra clave secreta
const PRIVATE_KEY = 'myprivatekey';

//Array como Database
const usuarios = [];

//Función para generar el token
function generateToken(user) {

    const token = jwt.sign(
        {user},
        PRIVATE_KEY,
        { expiresIn: '1h'}
    );

    return token
    
}

//registrar usuario
//register user
app.post('/hernan', (req, res) =>{

    console.log(req.body);

    const {nombre, password, email} = req.body;

    console.log(`los datos enviados son  ${nombre} - ${password} - ${email}`);

    const yaExiste = usuarios.find(usuario => usuario.email == email);

    if(yaExiste){
        return res.json({
            error : "El email del usuario ya exite"
        })
    }

    //make user
    const usuario = { nombre, password, email}
    //add user to array
    usuarios.push(usuario);

    //creamos el token
    const token = generateToken(usuario)

    console.log(token);

    for (let i = 0; i < usuarios.length; i++) {
        console.log(`Usuario: ${i} - ${usuarios[i].nombre} - ${usuarios[i].password} - ${usuarios[i].email}`);
        
    }

    res.json({
        mensaje: "Usuario agregado"
    })

})


app.post('/registrar', (req, res) => {

    const { nombre, email, password } = req.body;

    console.log(`1. ${nombre}, ${email}, ${password}`);

    const yaExiste = usuarios.find(usuario => usuario.email == email);

    console.log(`2. ${yaExiste}`);

    //comprobamos si el usuario existe por su email
    if(yaExiste){
        return res.json({
            error: 'El email del usuario ya existe' 
        })
    }

    //creamos el usuario con los datos recibidos
    const usuario = { nombre, password, email };

    //insertamos el usuario en el array
    usuarios.push(usuario);

    const token = generateToken(usuario)

    console.log(token);

    console.log(usuarios);

    //imprimimos la lista de usuarios
    for(let i = 0; i < usuarios.length; i++){
        console.log(`Usuario: ${i} - ${usuarios[i].nombre} - ${usuarios[i].password} - ${usuarios[i].email}`);

    }

    res.json({
        mensaje: 'Usuario creado y JWT adjunto'
    })
})



app.get('/', (req, res) => {
    res.json({
        mensaje: "Servidor dedicado a JWT"
    })
})


app.listen(PORT, () => {
    console.log(`Servidor de JWT trabajando en el PORT ${PORT}`);
})



