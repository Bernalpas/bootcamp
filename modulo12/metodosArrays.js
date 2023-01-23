
//Arrays
const miArray = ['Pepe', 'Mario', 'Juan', 'Antonio'];

//Length: obtiene el largo de un array
console.log(miArray.length);


//Agregar datos: Push: inserta datos al final del Array.
miArray.push('Hernán');
console.log(miArray.length);

//Recorremos el Array con un Bucle for
for (let i = 0; i < miArray.length; i++) {
    console.log(`Integrantes del equipo: ${miArray[i]}`);    
}

console.log('===================================================');

//Quitamos elementos del Array: del último lugar
miArray.pop();

//Recorremos el Array con un Bucle for
for (let i = 0; i < miArray.length; i++) {
    console.log(`Integrantes del equipo: ${miArray[i]}`);    
}

console.log('===================================================');

//Quitamos elementos del Array: del primer lugar
miArray.shift();

//Recorremos el Array con un Bucle for
for (let i = 0; i < miArray.length; i++) {
    console.log(`Integrantes del equipo: ${miArray[i]}`);    
}

console.log('====================================================');

//Elimina uno o varios elementos, uno: donde inicia, dos: datos a eliminar
miArray.splice(1, 2);

for (let i = 0; i < miArray.length; i++) {
    console.log(`Integrantes del equipo: ${miArray[i]}`);    
}

console.log('====================================================');

//Insertamos datos
miArray.push('Hernán');
miArray.push('Rocco');
miArray.push('Juan');
miArray.push('Mariana');

for (let i = 0; i < miArray.length; i++) {
    console.log(`Integrantes del equipo: ${miArray[i]}`);    
}

console.log('====================================================');

//Mostramos los elementos mediante comas

console.log(miArray.join(', '));
console.log(miArray.join('; '));
console.log(miArray.join(' - '));
console.log(miArray.join(' / '));
console.log(miArray.join(' * '));



console.log('====================================================');

//Método para contatenar / unir dos Arrays
const otroArray = ['Pepe', 'Mario', 'Juan', 'Antonio'];

const todos = miArray.concat(otroArray);

console.log(todos);

console.log('====================================================');

//Búsqueda de un dato dentro del array
console.log(otroArray.includes('Mariana'));

console.log(miArray.includes('Mariana'));

console.log('====================================================');

//Búsqueda de su índice

console.log(otroArray.indexOf('Mariana')); //-1 no está
console.log(miArray.indexOf('Mariana')); // me devuelve la posición

console.log('====================================================');

//Me devuelve el array al revés y lo deja invertido
console.log(miArray.reverse());

console.log(miArray);

for (let i = 0; i < miArray.length; i++) {
    console.log(`Integrantes del equipo: ${miArray[i]}`);    
}

console.log('====================================================');

console.log(miArray.reverse());

for (let i = 0; i < miArray.length; i++) {
    console.log(`Integrantes del equipo: ${miArray[i]}`);    
}