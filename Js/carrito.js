productos = []; //ingresar los productos del catalogo a este array


//variable del total del carrito de compras
let total = productos.reduce ((acumulador, producto) => acumulador + producto.precio, 0) //sujeto a modificacion de acuerdo a como una al catalogo con el carrito

console.log(total)