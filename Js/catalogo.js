// CATALOGO:
// 1. Permitir ingresar tipo de producto, modelo, precio en pesos y dolares
//                   ***TERMINADO***

// 2. Unir el catalogo con un carrito de compras
//                  ***EN PROCESO***


const cotizacion = prompt("Ingrese la cotizacion del dolar de la fecha"); //dato ingresado por el Admin

class Celular {
    static id = 0
    constructor(marca, modelo, cantidad, precio){
        this.id = ++Celular.id,
        this.marca = marca,
        this.modelo = modelo,
        this.cantidad = cantidad,
        this.precio = precio
    };       
    calcularSubtotal() {
        return this.cantidad * this.precio
    };

    calcularPrecioConIva() {
        return this.calcularSubtotal() * 1.21
    };
};

const productos = []

const agregarCatalogo = () => {
    let agregarMarca = prompt("Por favor, ingrese la marca del teléfono");
    let agregarModelo = prompt("Por favor, ingrese el modelo");
    let agregarCantidad = parseInt(prompt("Por favor, ingrese la cantidad"));
    let agregarPrecio = parseInt(prompt("Por favor, ingrese el precio en pesos"));

    if (isNaN(agregarCantidad) || isNaN(agregarPrecio) || agregarCantidad <= 0 || agregarPrecio <= 0) {
        alert("Los valores ingresados no son válidos. Intente de nuevo.");
        return;
    }else {
        const agregarCelular = new Celular(agregarMarca, agregarModelo, agregarCantidad, agregarPrecio);
        productos.push(agregarCelular);
        alert(`Producto agregado: ${agregarMarca} ${agregarModelo}`);
    }    
}

const verCatalogo = () => {
    if (productos.length === 0) {
        alert("No hay productos agregados al catálogo.");
        return;
    }else {
        productos.forEach(producto => {
        alert(`ID: ${producto.id}\n` + `Marca: ${producto.marca}\n` + `Modelo: ${producto.modelo}\n` + `Cantidad: ${producto.cantidad}\n` + `Precio en pesos: $${producto.precio}\n` + `Subtotal: $${producto.calcularSubtotal()} \n` + `Precio con IVA: $${producto.calcularPrecioConIva()}`);
        });
        let productoDolares = prompt("Desea pasar los valores a dólares?")
        if(productoDolares === "si"){
            productos.map((producto) => {
                producto.precio = producto.precio / cotizacion;
                alert(`Precio en dolares: u$s${producto.precio}`);
            });
        }else {
            alert("No se ha modificado la cotización");
        }
    };
};

const menuPrincipal = () => {
    let opcion;
  
    do {
        opcion = parseInt(prompt("Bienvenido al menú de administrador:\n" + "1. Agregar un celular al catálogo\n" + "2. Ver catálogo\n" + "3. Salir"));

        switch (opcion) {
            case 1:
                agregarCatalogo();
                break;
            case 2:
                verCatalogo();
                break;
            case 3:
                alert("Gracias por usar el sistema.");
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== 3);
}        

menuPrincipal();
console.log(productos);