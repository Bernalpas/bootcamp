
console.log("Soy el código fuera del archivo de HTML")

//Esto es un comentario en JS

/*
Este es un comentario de varias líneas
console.log("Soy el código fuera del archivo de HTML")
console.log("Soy el código fuera del archivo de HTML")
console.log("Soy el código fuera del archivo de HTML")
console.log("Soy el código fuera del archivo de HTML")
*/

console.log("En JS los puntos y comas son optativos");

console.log("Mi código no tiene punto y coma al final")


console.log("===========================================");
console.log("===========================================");

//Variables
var factura;// declaración de una variable

factura = "Pagué la factura del 2020 - Mes Enero"

console.log(factura);


//Variables válidas
var $nombre;
var nombre;
var nombrePersona;
var _miVariable;
var nombre_Producto;

//Variables no Válidas
/*
var nombre-mascota;
var -apellido;
var 1234miNumero;
var mi calle;
*/

//Variables no sugeridas
var café; 
var niño;

console.log("===========================================");

//Variables String : Cadenas de Texto
let nombreProducto = "Zapatillas";
let nombreCliente = 'Pepe';

console.log('El cliente ' + nombreCliente + ' compró unas ' + nombreProducto);

//Variable númerica
const IVA = 0.21;
const PI = 3.1432132154;
const DNI = '191257898';

console.log("===========================================");
console.log("===========================================");

console.log('Mi número de DNI es ' + DNI);

let ivaProducto = IVA * 500;

let totalCompraCliente = 500 + ivaProducto;

console.log('El IVA que tiene que pagar para comprar las zapatillas es de: ' + ivaProducto + ' pesos.');

console.log('Su compra total es de: ' + totalCompraCliente + ' pesos.');

let pagoCliente = 1000;
let cambioCompra = pagoCliente - totalCompraCliente;
console.log('Tu cambio es de: ' + cambioCompra + ' pesos.');


//Variable undefined
let indefinido;
console.log(indefinido);

//Variables booleanas
let falso = false;
let verdadero = true;

console.log('El cliente X, compró el producto?');
console.log(falso);

console.log('El cliente X se identificó?');
console.log(verdadero);

console.log("===========================================");
console.log("===========================================");

//Variables de tipo Objeto
let persona = {
    dni: 123456789,    
    domicilio: 'mi calle Nº 10',
    nombre: 'Mario',
    apellido: 'Pérez',
    trabajo: true
}

console.log('El cliente es: ' + persona);

console.table(persona);

console.log("===========================================");

console.log('EL nombre de la persona es: ' + persona.nombre + ' y su apellido es: ' + persona.apellido +  ' y su DNI es: ' + persona.dni + ' y trabaja: ' + persona.trabajo + '.');

console.log("===========================================");


//Interpolación de variables
console.log(`El nombre del Cliente es ${persona.nombre} y su apellido es ${persona.apellido} y su DNI es ${persona.dni} y trabaja ${persona.trabajo}.`);

console.log(``);








console.log("===========================================");







