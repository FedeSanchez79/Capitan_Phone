// -DOM y Eventos (LISTO)

// -NADA de console, prompt y alert (LISTO)

// -localstorage(guardar, recuperar, modificar, borrar)

// -CSS básico (LISTO)

// -Arrays de objetos (Use funcion contructora - LISTO)

// -MINIMO 2 funciones de orden superior DIFERENTES (forEach y filter en catalogo)

// -NADA de JS en el html (LISTO)

let nuevoTitulo = document.getElementById(`info`);
let tituloContacto = document.createElement(`p`);
tituloContacto.innerText = `¡Estamos a tu disposición!`;
nuevoTitulo.appendChild(tituloContacto);
tituloContacto.className = `estamos`;