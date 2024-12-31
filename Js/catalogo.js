// CATALOGO:
// 1. Permitir ingresar tipo de producto, modelo, precio en pesos y dolares
// 2. Unir el catalogo con un carrito de compras


const cotizacion = 1100

class Celular {
    static id = 0
    constructor(marca, modelo, cantidad, precio, subtotal){
        this.id = ++Celular.id,
        this.marca = marca,
        this.modelo = modelo,
        this.cantidad = cantidad,
        this.precio = precio,
        this.subtotal = subtotal
    }       
}

const productos = []

const agregarCatalogo = () => {
    let agregarMarca = prompt("Por favor, ingrese la marca del teléfono")
    let agregarModelo = prompt("Por favor, ingrese el modelo")
    let agregarCantidad = parseInt(prompt("Por favor, ingrese la cantidad"))
    let agregarPrecioDolares = parseInt(prompt("Por favor, ingrese el precio en dolares"))
    let agregarSubtotal = agregarCantidad*(agregarPrecioDolares*cotizacion)

    const agregarCelular = new Celular(agregarMarca, agregarModelo, agregarCantidad, agregarPrecioDolares, agregarSubtotal)
    productos.push(agregarCelular)
}

const verCatalogo = () => {
    if(productos == 0){
        console.log("No hay productos agragados")
    }else{
        for(const producto of productos)
        console.log(`Marca: ${producto.marca}\nModelo: ${producto.modelo}\nCantidad: ${producto.cantidad}\nPrecio en dólares: ${producto.precio}\nSubtotal en Pesos: $ ${producto.subtotal}`)
    }
}

let menu = parseInt(prompt("Bienvenido al menú de administrador: \n" + "Por favor elija una opción\n" + "1.- Agregar un celular al catálogo\n" + "2.- Ver catálogo\n" + "3.- Salir del menú"))

while (menu !== 3){
    switch(menu) {
        case 1:
            agregarCatalogo()
            break
        case 2:
            verCatalogo()
            break
        default: 
            console.log("Opción no válida")       
    }
    menu = parseInt(prompt("Bienvenido al menú de administrador: \n" + "Por favor elija una opción\n" + "1.- Agregar un celular al catálogo\n" + "2.- Ver catálogo\n" + "3.- Salir del menú"))
}

console.log(productos)