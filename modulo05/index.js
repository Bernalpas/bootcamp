
console.log(`Vamos a trabajar con un Fetch`);

//Llamada para la solicitud de recursos, datos, informaciones
//Tipo JSON: Objetos Notación JS

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        //console.log(response.json());
        return response.json();
    })
    .then(usuarios =>{
        mostrarDatos(usuarios)
    })
    .catch( error => {
        console.log(error);
    })

function mostrarDatos(usuarios) {
    for (const usuario of usuarios) {
        let div = document.createElement('div');
        div.innerHTML = `<h2>Nombre: ${usuario.name} - ${usuario.email} - ${usuario.website}</h2>`
        document.body.append(div)
    }
}


console.log(`===================================================`);
console.log(`===================================================`);
console.log(`===================================================`);


fetch('https://api.mercadolibre.com/items/MLA1136716168')
    .then(response =>{
        console.log(response.json());
    })
    .catch( error => {
        console.error(error);
    })












