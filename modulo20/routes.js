const path = require('path');


const getLogin = (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'))
}

const postLogin = (req, res) => {
    //console.log(req.body);
    res.json({
        res: 'Datos recibidos'
    })
}

const postSingup = (req, res) => {
    //console.log(req.body);
    res.json({
        res: 'Datos Registrados'
    })
}

module.exports = {
    getLogin,
    postLogin,
    postSingup
}