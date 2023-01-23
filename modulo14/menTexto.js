const express = require('express');
require('dotenv').config();
const app = express();
const twilio = require('twilio');
const PORT = process.env.PORT || 9002;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Enviando Mensajes de Texto')
})

app.post('/', async(req, res) => {
    const numero = req.body.numero;

    console.log(`El número del cliente es: ${numero}`);

    const accountId = process.env.IDTWILIO;
    const authToken = process.env.TOKENTWILIO;

    const admin = twilio(accountId, authToken)

    console.log(`Los datos son: ${accountId} - ${authToken}`);

    try {
        const mensaje = await admin.messages.create({
            body: "Buenas noches!! Hoy ganó Argentina!! Mensaje desde Node.Js",
            from: process.env.NUMTWILIO,
            to: numero
        })
        console.log(mensaje);
        res.send('Mensaje enviado a su celular!!')
    } catch (error) {
        console.log(error);
    }
})



app.listen(PORT, () => {
    console.log(`Servidor para Mensajes de Texto Trabajando en el puerto ${PORT}`);
})

