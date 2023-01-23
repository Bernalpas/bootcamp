


const fs = require('fs');

let texto = '\n Dato que sumamos a el contenido anterior'

//Recordar separar los contenidos a esctibir
fs.appendFileSync('./archivo.txt', `${texto}`);

