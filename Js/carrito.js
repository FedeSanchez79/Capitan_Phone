// -DOM y Eventos

// -NADA de console, prompt y alert

// -localstorage(guardar, recuperar, modificar, borrar)

// -CSS básico

// -Arrays de objetos

// -MINIMO 2 funciones de orden superior DIFERENTES

// -NADA de JS en el html

productos = []; //ingresar los productos del catalogo a este array


//variable del total del carrito de compras
let total = productos.reduce ((acumulador, producto) => acumulador + producto.precio, 0) //sujeto a modificacion de acuerdo a como una al catalogo con el carrito

console.log(total)