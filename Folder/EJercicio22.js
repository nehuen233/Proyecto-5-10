const axios = require('axios');

const respuesta = axios.get('https://web.dragonball-api.com/')
    console.log(respuesta.data)
    for (let i = 0; i < respuesta.data.length; i++) {
        console.log(respuesta.data[i].name) 
            console.log(respuesta.data[i].name, respuesta.data[i].ki);
    
}

//Obtener el mayor personaje con Ki de dagon ball y menor Ki de dragon ball
