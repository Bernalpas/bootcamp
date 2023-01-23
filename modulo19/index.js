// importamos las librerias
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const FacebookStrategy = require('passport-facebook').Strategy;
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 9000

// completar con sus credenciales
const FACEBOOKCLIENTID = process.env.FACEBOOKCLIENTID;
const FACEBOOKCLIENTSECRET = process.env.FACEBOOKCLIENTSECRET;

// creamos la aplicacion
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));

// configuramos passport para usar facebook
passport.use(new FacebookStrategy({
    clientID: FACEBOOKCLIENTID,
    clientSecret: FACEBOOKCLIENTSECRET,
    callbackURL: '/auth/facebook/callback',
    //profileFields: ['id', 'displayName', 'photos', 'emails'],
    profileFields: ['id', 'emails'],
    scope: ['email']
}, function (accessToken, refreshToken, profile, done) {
    console.log(JSON.stringify(profile, null, 3));
    let userProfile = profile;
    return done(null, userProfile);
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

// inicializamos passport
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/facebook/callback', passport.authenticate('facebook',
{
    successRedirect: '/datos',
    failureRedirect: '/error'
}
));

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a la App de Login con Facebook</h1>')
});

app.get('/login/facebook', passport.authenticate('facebook',))

app.get('/datos', (req, res) => {
    if(req.isAuthenticated()){
        res.send('<h1>Tienes acceso a los Datos de la Empresa</h1>')
    }else{
        res.send('<h1>Tenemos un Error en la autenticación</h1>')
    }
})

app.get('/error', (req, res) => {
    res.send('<h1>Tenemos un Error en la autenticación</h1>')
})

//Cerrar sessión
app.get('/logout', (req, res) => {
    req.logout();
    res.send('<h1>Sessión Cerrada</h1>')
})

//Puerto a la escucha
app.listen(PORT, () => {
    console.log(`App con Login de Facebook corriendo en ${PORT}`);
})

