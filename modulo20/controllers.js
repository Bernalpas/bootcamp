const bcrypt = require('bcrypt');


// Función para encriptar la contraseña en la database
const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

//Función para validar la contraseña y el username
const validarPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
}


//Controladores para las Rutas de la App

/* const getLogin = (req, res) => {
    if(req.)
} */


module.exports = {
    createHash,
    validarPassword, 
    //getLogin
}