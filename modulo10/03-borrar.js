

const fs = require('fs');

//borramos un archivo
fs.unlinkSync('./texto.txt');


//intentamos leerlo y no se puede
const datos = fs.readFileSync('./texto.txt', 'utf-8');
console.log(datos);







