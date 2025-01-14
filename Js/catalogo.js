// -DOM y Eventos

// -NADA de console, prompt y alert

// -localstorage(guardar, recuperar, modificar, borrar)

// -CSS básico

// -Arrays de objetos

// -MINIMO 2 funciones de orden superior DIFERENTES

// -NADA de JS en el html

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

    //faltaria ver como agragar la imagen del producto 

    function crearCatalogo(product){
        product.forEach((item) => {
            const card = document.getElementById("productoInfo")
            card.innerHTML = `<h3 id="modelo">${item.modelo}</h3>
                              <p id="precio">u$s ${item.precio}</p>`
        })
    }

    crearCatalogo(productos)

}

    //Ahora el boton de cada producto



//     let agregarMarca = prompt("Por favor, ingrese la marca del teléfono");
//     let agregarModelo = prompt("Por favor, ingrese el modelo");
//     let agregarCantidad = parseInt(prompt("Por favor, ingrese la cantidad"));
//     let agregarPrecio = parseInt(prompt("Por favor, ingrese el precio en pesos"));
//     Math.round(agregarPrecio);//si bien no se explico en clase lo use para que de número redondo

//     if (isNaN(agregarCantidad) || isNaN(agregarPrecio) || agregarCantidad <= 0 || agregarPrecio <= 0) {
//         alert("Los valores ingresados no son válidos. Intente de nuevo.");
//         return;
//     }else {
//         const agregarCelular = new Celular(agregarMarca, agregarModelo, agregarCantidad, agregarPrecio);
//         productos.push(agregarCelular);
//         alert(`Producto agregado: ${agregarMarca} ${agregarModelo}`);
//     }    


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
                Math.round(producto.precio); //si bien no se explico en clase lo use para que de número redondo
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

// const productos= [
//     {
//         id: 1, 
//         nombre: "televisor", 
//         precio: 5000
//     },
//     {
//         id: 2, 
//         nombre: "lavarropas", 
//         precio: 8000
//     },
//     {
//         id: 3, 
//         nombre: "microondas", 
//         precio: 2000
//     },
//     {
//         id: 4, 
//         nombre: "secadora", 
//         precio: 4000
//     },
//     {
//         id: 5, 
//         nombre: "cocina", 
//         precio: 13000
//     },
// ]

// let cartProducts = []
// let productsContainer = document.getElementById("products-container")

// function renderProductos(productsArray) {
//     productsArray.forEach((producto) => {
//         const card = document.createElement("div")
//         card.innerHTML = `<h3>${producto.nombre}</h3>
//                           <p>$${producto.precio}</p>
//                           <button class="productoAgregar" id="${producto.id}">Agregar</button>`
//         productsContainer.appendChild(card)
//     })
//     addToCartButton()
// }
// renderProductos(productos)


// function addToCartButton () {
//     addButton = document.querySelectorAll(".productoAgregar")
//     addButton.forEach(button => {
//         button.onclick = (e) => {
//             const productId = e.currentTarget.id
//             const selectedProduct = productos.find(producto => producto.id == productId)
//             cartProducts.push(selectedProduct)
//             console.log(cartProducts)

//             localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
//         }
//     })
// }