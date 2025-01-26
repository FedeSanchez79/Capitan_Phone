//CREO UN ARRAY DE OBJETOS PARA EL CATALOGO

const productos = [
    { id: 0, marca: "Iphone", modelo: "11", precio: 600, cantidad: 0},
    { id: 1, marca: "Motorola", modelo: "G84", precio: 400, cantidad: 0},
    { id: 2, marca: "Samsung", modelo: "A15", precio: 350, cantidad: 0},
    { id: 3, marca: "Xiaomi", modelo: "Redmi 13C", precio: 300, cantidad: 0},
    { id: 4, marca: "Motorola", modelo: "A15", precio: 310, cantidad: 0},
    { id: 5, marca: "Iphone", modelo: "13", precio: 900, cantidad: 0},
    { id: 6, marca: "Samsung", modelo: "A35", precio: 650, cantidad: 0},
    { id: 7, marca: "Iphone", modelo: "12", precio: 900, cantidad: 0},
    { id: 8, marca: "Samsung", modelo: "A06", precio: 210, cantidad: 0},
    { id: 9, marca: "Motorola", modelo: "G04", precio: 120, cantidad: 0},
    { id: 10, marca: "Xiaomi", modelo: "A3", precio: 310, cantidad: 0},
    { id: 11, marca: "Iphone", modelo: "15", precio: 1600, cantidad: 0},
    { id: 12, marca: "Samsung", modelo: "S24", precio: 1500, cantidad: 0},
    { id: 13, marca: "Xiaomi", modelo: "Note 13", precio: 510, cantidad: 0},
    { id: 14, marca: "Motorola", modelo: "A35", precio: 680, cantidad: 0},
    { id: 15, marca: "Iphone", modelo: "12", precio: 1100, cantidad: 0},
    { id: 16, marca: "Motorola", modelo: "Edge 50", precio: 1600, cantidad: 0},
    { id: 17, marca: "Samsung", modelo: "A55", precio: 820, cantidad: 0},
];

//A PARTIR DEL LISTADO, CREO UNA FUNCION PARA MOSTRAR LOS PRODUCTOS USANDO DOM

const listado = document.getElementById("contenedorProductos");

function mostrarProductos(productos) {
    listado.innerHTML = "";
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("producto-card");
        card.innerHTML = `<img class="productoImagen" src="../assets/images/iphone_imagen.jpg" alt="imagen de un producto">
                          <div class="productoInfo">
                          <h3 class="modelo">${producto.marca}</h3>
                          <p class="modelo">${producto.modelo}</p>
                          <p class="precio">u$s ${producto.precio}</p>
                          <button class="agregar" idInfo="${producto.id}">Agregar</button>
                          <p>Cantidad: </p>
                          <input type="number" id="cantidad-${producto.id}" min="1" value="${producto.cantidad}" placeholder="Ingrese la cantidad"></div>`;
        listado.appendChild(card);
    });

    agregarEventoCantidad();
    agregarEventoBotones();
}

//CREO UNA FUNCION 

function agregarEventoCantidad() {
    productos.forEach((producto) => {
        const inputCantidad = document.getElementById(`cantidad-${producto.id}`);
        const mensajeError = document.createElement("p"); 
        mensajeError.id = `error-${producto.id}`;
        inputCantidad.parentNode.appendChild(mensajeError); 

        if (inputCantidad) {
            inputCantidad.addEventListener("change", (e) => {
                const nuevaCantidad = e.target.value;
                if (nuevaCantidad === 0 || isNaN(nuevaCantidad)) {
                    mensajeError.textContent = "Agregue cantidad";
                    producto.cantidad = 0; 
                } else {
                    mensajeError.textContent = "";
                    producto.cantidad = nuevaCantidad; 
                }
            });
        }
    });
}

//USANDO LAS FUNCIONES DE INCREMENTAR, CARGAR Y AGREGAR MODIFICO EL INDICADOR DE CARRITO Y ACTUALIZO EL CARRITO

const numero = document.getElementById("numero1");
let contadorCarrito = 0;

function incrementarCarrito() {
    contadorCarrito++;
    numero.textContent = contadorCarrito;
}

function cargarCarrito() {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    contadorCarrito = carritoGuardado.length;
    numero.textContent = contadorCarrito;
}

function agregarEventoBotones() {
    const botonesAgregar = document.querySelectorAll(".agregar");
    botonesAgregar.forEach((boton) => {
        boton.onclick = () => {
            const productoId = parseInt(boton.getAttribute("idInfo"));
            const productoSeleccionado = productos.find((p) => p.id === productoId);
            const cantidadProducto = productoSeleccionado.cantidad;

            if (cantidadProducto === 0 || isNaN(cantidadProducto)) {
                const mensajeError = document.getElementById(`error-${productoId}`);
                mensajeError.textContent = "Agregue cantidad";
                return; 
            }

            const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

            const productoEnCarrito = carritoActual.find((p) => p.id === productoSeleccionado.id);
            if (productoEnCarrito) {
                productoEnCarrito.cantidad += productoSeleccionado.cantidad;
            } else {
                class Producto {
                    constructor(marca, precio, cantidad) {
                        this.marca = marca;
                        this.precio = precio;
                        this.cantidad = cantidad;
                    }
                }
                
                let copiaProducto = new Producto(
                    productoSeleccionado.marca,
                    productoSeleccionado.precio,
                    productoSeleccionado.cantidad
                );
                carritoActual.push(copiaProducto);
            }

            localStorage.setItem("carrito", JSON.stringify(carritoActual));
            incrementarCarrito();
        };
    });
}

const marcas = ["Iphone", "Motorola", "Xiaomi", "Samsung"];
const listaMarcas = document.getElementById("marcas");

marcas.forEach((marca) => {
    const marcaItem = document.createElement("li");
    marcaItem.textContent = marca;
    marcaItem.classList.add("marca-item");
    marcaItem.onclick = () => {
        const productosFiltrados = productos.filter((producto) => producto.marca.toLowerCase() === marca.toLowerCase());
        mostrarProductos(productosFiltrados);
        incrementarCarrito()
    };
    listaMarcas.appendChild(marcaItem);
});

cargarCarrito(); 
mostrarProductos(productos); 
