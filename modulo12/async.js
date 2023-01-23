

//Asíncrona
const fetchData =  async () => {
    try {
        let respuesta = await fetch('https://api.mercadolibre.com/sites') 
        let datos = await respuesta.json();
        console.log(datos);       
    } catch (error) {
        console.log(error);
    }
}

fetchData()