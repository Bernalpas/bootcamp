
//Inicializamos la conexión 
const socket = io.connect();


//Recibimos el mensaje desde el servidor
socket.on('mi mensaje', data => {
    alert(data);
    socket.emit('notificación', 'Mensaje recibido exitosamente en el Cliente')
});