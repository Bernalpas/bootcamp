const express = require('express');
const app = express();
const PORT = 9000;
const http = require('http').Server(app)

//le pasamos la constante http a socket.io
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index')
});

//al conectarse se ejecuta socket una sola vez
io.on('connect', socket => {
    console.log('Usuario Conectado para chatear');
    socket.emit('mi mensaje', 'Bienvenido a nuestro Chat de Atención al Cliente');

    //recibir algún evento desde el cliente
    socket.on('notificacion', data =>{
        console.log(data);
    })
})

http.listen(PORT, () => {
    console.log(`Servidor con Mensajería listos para la comunicación en el puerto ${PORT}`);
});