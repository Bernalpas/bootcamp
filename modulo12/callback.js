
//Funcione Callback

function Sumar() {
    let a = 5;
    let b = 8;
    let resultado = a + b;
    return resultado;
}

console.log(`El resultado de la suma es ${Sumar()}`);

function Restar(a, b) {
    let resultado = a - b;
    return resultado;
}

console.log(`El resultado de la resta es ${Restar(500, 200)}`);

const Multiplicar = function(a, b) {
    let resultado = a * b;
    return resultado;
}

console.log(`El resultado de la multiplicación  es ${Multiplicar(50, 89)}`);

const Dividir = (a, b) => {
    let resultado = a / b;
    return resultado;
}

console.log(`El resultado de la división es ${Dividir(1200, 8)}`);


function Llamadas(callback, b) {
    console.log('Hola ' + b);
    callback();
}


function Argumento(){
    console.log('Mundo');
}

Llamadas(Argumento, 'Pepe');

console.log('======================================================');


let pedido = (produccion) => {
    console.log('Los pedidos para el negocio han sido recibidos');
    produccion();
}


let produccion = function(){
    console.log('2. Recibimos las tareas correspondientes para producir en la fábrica');
}

pedido(produccion);

console.log('======================================================');
console.log('======================================================');

let stock = {
    zapatillas: ['adidas', 'topper', 'nike', 'otra'],
    numero: [35, 36, 37, 38, 39, 40],
    color: ['verde', 'azul', 'negro', 'blanco'],
    alcance: ['dama', 'caballero', 'niño', 'niña']
}

let trabajar = (modelo, fabricar) => {
    console.log(`1. Pedido recibido: ${modelo}, llamando a la fábrica para que envíe el producto`);

    setTimeout(()=>{
        setTimeout(()=>{
            console.log(`3. Enviaremos su Producto a la dirección establecida`);
            setTimeout(()=>{
                console.log(`4. Recibiremos su pago según lo solicitado`);
            }, 5000);
        }, 9000)
        fabricar()
    }, 4000)

}

trabajar('adidas', produccion);

console.log('======================================================');



