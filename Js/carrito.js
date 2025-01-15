// -DOM y Eventos

// -NADA de console, prompt y alert (LISTO)

// -localstorage(guardar, recuperar, modificar, borrar)

// -CSS básico (LISTO)

// -Arrays de objetos (Use funcion contructora - LISTO)

// -MINIMO 2 funciones de orden superior DIFERENTES (Use .map y .forEach en catalogo y .reduce en carrito pero no esta en ejecución todavia)

// -NADA de JS en el html (LISTO)

productos = []; //ingresar los productos del catalogo a este array


//variable del total del carrito de compras
let total = productos.reduce ((acumulador, producto) => acumulador + producto.precio, 0) //sujeto a modificacion de acuerdo a como una al catalogo con el carrito

console.log(total)