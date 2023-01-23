

//No necesitamos descargar alguna librería
const fs = require('fs');

const datos = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(datos);

