const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const path = require('path');
//const  fileURLToPath  = require('url');

const routes = require('./routes');
const conexion = require('./config');//conectado a MONGO Local = educacionit
const controllers = require('./controllers');
const User = require('./models');

const PORT = 9000;
const tiempoExpiracion = 20000;
const app = express();

//const filename = fileURLToPath().meta();
//const dirname = path.dirname(__filename);

//console.log(filename);


//Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/views')));

console.log(__dirname + '/views');

//Configuración de Passport con la Estrategia Local - Registro de User
passport.use('signup', new LocalStrategy({
    passReqToCallback: true,
}, (req, username, password, done) => {
    
    //1. Buscamos en nuestra estrategia local si existe el usuario 
    User.findOne({'username': username}, (err, user) => {
        if(err){
            console.log(`Error: ${err} - No conectado a la DB`);
        }

        if(user){
            console.log(`El Usuario ya Existe`);
            return done(null, false)
        }

        //2. Creamos un nuevo usuario
        const newUser = {
            username: username,
            password: controllers.createHash(password),//createHash(password),
            //password: password,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email
        }

        //3. Insertamos en la database el usuario
        User.create(newUser, (err, user) => {
            if (err) {
                console.log(`Error creando el Usuario - ${err}`);
                return done(err)
            }
            console.log(`Ususario Creado: ${user}`);
            return done(null, user)
        })
    })
})
); 

//Configuramos la estrategia para el Login del User
passport.use('login', new LocalStrategy(
    (username, password, done) => {
        User.findOne({username}, (err, user) => {
            if (err) {
                return done(err)
            }

            if (!user) {
                console.log(`Username no encontrado:  ${username}`);
                return done(null, false)
            }

            if (!controllers.validarPassword(user, password)) {
                console.log(`Password incorrecto`);
                return done(null, false)
            }

            return done(null, user)

        })
    }
))

//Función para encriptar la constraseña
/* const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
} */

//Función para validar la contraseña y el username
/*const validarPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
}*/


//Configuramos la session del User
app.use(session({
    secret: 'secreto',
    cookie: {
        httpOnly: true,
        secure: true,
        maxAge: tiempoExpiracion
    },
    rolling: true,
    secure: true,
    saveUninitialized: false
}))

//Inicializamos las estrategias locales de passport
app.use(passport.initialize());
app.use(passport.session());


//Rutas
app.get('/login', routes.getLogin);

app.post('/login', passport.authenticate('login', { failureRedirect: '/views/error.html'}), routes.postLogin)

app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname, '/error.html'))
});

app.get('/singup', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/singup.html'))
    console.log(path.join(__dirname, '/views/singup.html'));
})

app.post('/signup', passport.authenticate('signup', 
{ failureRedirect: '/views/error.html'}, 
routes.postSingup))


//console.log(path.join(__dirname, '/views/error.html'));

//Server con una función de error
app.listen(PORT, (err) =>{
    if(err) return console.log(`Error levantando el Server en el puerto ${PORT}`);
    console.log(`Server corriendo en el puerto ${PORT}`);
})

// Configurar la Estrategia Local de Passport //
