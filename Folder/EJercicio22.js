const axios = require('axios')

console.log("ESTOY ARRIBA");

axios.get('https://dragonball-api.com/api/characters').then((respuesta) => {
    const personajes = respuesta.data.items
    var newPersonajes = []
    for (let i = 0; i < personajes.length; i++) {
        personajes[i].ki.split('.').join('')
        newPersonajes.push({
            name: personajes[i].name,
            ki: Number(personajes[i].ki.split('.').join(''))
        })
    }
   
    newPersonajes.sort((a,b)=> a.ki - b.ki)
    console.log(newPersonajes);
    console.log(newPersonajes[newPersonajes.length-1]);
    console.log(newPersonajes[0]);
   

    // var max = 0
    // let personaje = {}
    // for (let i = 0; i < personajes.length; i++) {
    //     var miKi = ''
    //     for (let j = 0; j < personajes[i].ki.length; j++) {
    //         // console.log(personajes[i].ki[j]);
    //         if (personajes[i].ki[j] !== '.') {
    //             miKi = miKi + personajes[i].ki[j]
    //         }

    //     }
    //     if (Number(miKi) > max) {
    //         max = miKi
    //         personaje = personajes[i]
    //     }
    // }
    // console.log(max);
    // console.log(personaje.name);
})


console.log("ESTOY ABAJO");

//Obtener el mayor personaje con Ki de dagon ball y menor KI
// # 🧠 Apunte: API + JavaScript + Axios + NPM

// ## 🔧 1. Iniciar un proyecto con NPM

// 1. Abrir la terminal en una carpeta nueva.
// 2. Ejecutar:

// ```bash
// npm init
// ```

// Esto crea un archivo `package.json` con configuración básica para Node.js.

// ---

// ## 📦 2. Instalar Axios

// ```bash
// npm install axios
// ```

// Esto agrega Axios como dependencia para hacer peticiones HTTP a APIs.

// ---

// ## 🗃️ 3. Configurar `package.json` para usar `npm run start`

// Editar el archivo `package.json` y agregar:

// ```json
// "scripts": {
//   "start": "node --watch index.js"
// }
// ```

// Esto permite correr el proyecto con:

// ```bash
// npm run start
// ```

// ---

// ## ▶️ 4. Ejecutar el archivo JS

// Podés correr tu archivo de dos formas:

// ```bash
// node index.js     # Opción directa
// npm run start     # Usando el script del package.json
// ```

// ---

// ## 🌐 5. Hacer peticiones con Axios a la API de Dragon Ball

//**Archivo: `index.js`**

//```js
//const axios = require('axios');

//axios.get('https://dragonball-api.com/api/characters').then((respuesta)=>{
 //   const personajes = respuesta.data.items
   // for (let i = 0; i < personajes.length; i++) {
     //   console.log(personajes[i].name, personajes[i].ki);
             
 //   }
//})

// ```

// //---

// //## 📜 6. ¿Qué es una promesa en JavaScript?

// //Una **promesa** representa un valor que **todavía no está disponible**, pero lo estará en el futuro (por ejemplo, el resultado de una API).

// //Cuando usamos `.then()`, estamos diciendo:

// //➡️ *“Cuando esté lista la respuesta, hacé esto con ella…”*

// //Ejemplo básico:

// //```js
//promesa.then(resultado => {
  // Código que se ejecuta cuando la promesa se resuelve
//});
///```

//---

//> 💡 Este apunte sirve como guía básica para hacer peticiones a una API desde Node.js usando Axios, entendiendo cómo funcionan las promesas y cómo iniciar un proyecto con npm.
//Obtener el mayor personaje con Ki de dagon ball y menor Ki de dragon ball

