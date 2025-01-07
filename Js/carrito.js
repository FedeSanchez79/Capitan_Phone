productos = []; //ingresar los productos del catalogo a este array

let total = productos.reduce ((acumulador, producto) => acumulador + producto.precio, 0) //sujeto a modificacion de acuerdo a como una al cataloo con el carrito

console.log(total)