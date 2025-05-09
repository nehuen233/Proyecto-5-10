const express = require('express')

const server = express()
const PORT = 3000
server.get('/', (request, response) => {

    response.send("Estoy en HOME")
})

//http://
// http://localhost:3000/sumar/25/8 → me devuelve 33
server.get('/sumar/:numero1/:numero2', (request, response) => {
    // console.log(request.params.numero1);// es como un parametro de la funcion
    // console.log(request.params.numero2); // es como un parametro de la funcion
    const resultado = Number(request.params.numero1) + Number(request.params.numero2)
    response.send("El resultado de la suma es: " + resultado) //es como el retunr de una funcion
})

//http://localhost:3000/sumarquery?numero1=56&numero2=28 → me devuelve 84
server.get('/sumarquery', (request, response) => {
    // console.log(request.query);
    const numero1 = Number(request.query.numero1)
    const numero2 = Number(request.query.numero2)
    const resultado = numero1 + numero2

    response.send("El resultado de la suma es: " + resultado) //es como el retunr de una funcion
})


server.listen(PORT, ()=>{
    console.log(`El servidor se esta ejecutando en el puerto: ${PORT}`);
})