const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const hbs = require('hbs');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cookieParser());
app.use(morgan('common'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Cookies sin firma
app.get('/', (req, res) => {
    res.cookie('user', "Berni");
    res.cookie('password', "1234");
    res.render('home', {
        data: ' enviadas'
    })
})

//Obteniendo las cookies
app.get('/getCookies', (req, res) => {
    console.log(req.cookies.user);
    console.log(req.cookies.password);
    res.render('home', {
        data: ' impresas'
    })
})

//Cookies con límite de tiempo de vida
app.get('/timeCookies', (req, res) => {
    res.cookie('usuarioDos', 'Pepe', { maxAge: 3000 });
    res.cookie('passwordDos', '5678', { maxAge: 3000 });
    res.render('home', {
        data: ' con límite de tiempo'
    })
})

//Eliminamos las cookies
app.get('/deleteCookies', (req, res) =>{
    res.clearCookie('user').clearCookie('password');
    res.render('home', {
        data: ' eliminadas'
    })
})

app.listen(PORT, () => {
    console.log(`Servidor con Cookies trabajando`);
})