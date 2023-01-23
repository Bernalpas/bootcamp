const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const hbs = require('hbs');
const app = express();
const session = require('express-session');
const PORT = 9000;
const FileStore = require('session-file-store')(session);
let contador = 0;


app.use(express.json());
app.use(cookieParser());
app.use(morgan('common'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Session config
app.use(session({
    store: new FileStore({ path: './sessiones', ttl:300 }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))

//Función middelware para proteger rutas
function auth(req, res, next) {
    if(req.session?.user === 'Berni' && req.session?.admin){
        return next()
    }
    return res.status(401).send('No estás autorizado para continuar')
}

//Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res) => {
    res.send('Session')
    console.log(req.session);
})

app.get('/session', (req, res) => {

    console.log(req.session);

    req.session.usuario = 'berni';
    req.session.password = '12345';
    req.session.age = '60';

    res.send({
        message: 'Sesión iniciada',
        ses: req.session
    })

    console.log(req.session);
    
})


//Login con Session
app.get('/login', (req, res) =>{
    const { usuario, password } = req.query;

    if (usuario !== 'berni' || password !== '12345') {
        return res.send('Username o Password incorrecto')
    }

    req.session.user = usuario;
    req.session.admin = true;

    res.render('home', {
        data: ' - Ingreso a Session'
    })

});

app.get('/sinsession', (req, res) =>{
    res.send(`El contador sin Sessión está en: ${++contador}`)
})

app.get('/consession', (req, res) =>{
    if (req.session.contador) {
        req.session.contador++;
        res.send(`Se visitó la página con session ${req.session.contador} veces`)
    }else{
        req.session.contador--;
        res.send('Hola Contador')
    }
})

//toda la info de la sesión
app.get('/info', (req, res) =>{
    console.log(`Session: ${ req.session }`);
    console.log(`Session: ${ req.session.usuario }`);
    console.log(`Session: ${ req.session.password }`);
    res.send('Toda la info de la sesión impresa!')
})


//Cerrar sesión
app.get('/logout', (req, res) =>{
    req.session.destroy((err) =>{
        if (!err) {
            res.send('Genial, ya cerraste sesión, logout ok!!')
        }else{
            res.send({status: 'Error en la nave', body: err})
        }
    })
})


app.listen(PORT, () => {
    console.log(`Servidor con Sesiones trabajando`);
})