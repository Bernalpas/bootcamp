

const fs = require('fs');

fs.writeFileSync('./escribir.txt', 'Vamos Argentina para el Mundial!!');



//Si utilizamos el mismo archivo para la escritura, lo sobreescribe.
let texto = 'En este archivo vamos a escribir un texto de tipo string'


//Si el archivo no existe, este método lo crea. 
fs.writeFileSync('./texto.txt', `${texto}`);

