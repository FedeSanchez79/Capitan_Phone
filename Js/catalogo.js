//CREO UN ARRAY DE OBJETOS PARA EL CATALOGO

const productos = [
    {id: 1, marca: "Motorola", modelo: "G84", precio: 400},
    {id: 0, marca: "Iphone", modelo: "11", precio: 600},
    {id: 2, marca: "Samsung", modelo: "A15", precio: 350},
    {id: 3, marca: "Xiaomi", modelo: "Redmi 13C", precio: 300},
    {id: 4, marca: "Motorola", modelo: "A15", precio: 310},
    {id: 5, marca: "Iphone", modelo: "13", precio: 900},
    {id: 6, marca: "Samsung", modelo: "A35", precio: 650},
    {id: 7, marca: "Iphone", modelo: "12", precio: 900},
    {id: 8, marca: "Samsung", modelo: "A06", precio: 210},
    {id: 9, marca: "Motorola", modelo: "G04", precio: 120},
    {id: 10, marca: "Xiaomi", modelo: "A3", precio: 310},
    {id: 11, marca: "Iphone", modelo: "15", precio: 1600},
    {id: 12, marca: "Samsung", modelo: "S24", precio: 1500},
    {id: 13, marca: "Xiaomi", modelo: "Note 13", precio: 510},
    {id: 14, marca: "Motorola", modelo: "A35", precio: 680},
    {id: 15, marca: "Iphone", modelo: "12", precio: 1100},
    {id: 16, marca: "Motorola", modelo: "Edge 50", precio: 1600},
    {id: 17, marca: "Samsung", modelo: "A55", precio: 820},
];

//A PARTIR DEL LISTADO, CREO UNA FUNCION PARA MOSTRAR LOS PRODUCTOS USANDO DOM

const listado = document.getElementById("contenedorProductos");

function mostrarProductos(productos) {
    listado.innerHTML = "";
    productos.forEach((producto) => {
        const card = document.createElement("div");
        card.classList.add("producto-card");
        card.innerHTML = `
            <img class="productoImagen" src="../assets/images/iphone_imagen.jpg" alt="imagen de un producto">
            <div class="productoInfo">
                <h3 class="modelo">${producto.marca}</h3>
                <p class="modelo">${producto.modelo}</p>
                <p class="precio">u$s ${producto.precio}</p>
                <button class="agregar" idInfo="${producto.id}">Agregar</button>
                <p>Cantidad: </p>
                <input type="number" id="cantidad-${producto.id}" min="1" value="0" placeholder="0">
            </div>`;
        listado.appendChild(card);
    });

    agregarEventoCantidad(); // Solo agrega eventos para los productos visibles
    agregarEventoBotones(); // Asegura que los botones también tengan eventos
}

mostrarProductos(productos); 

//CREO UNA FUNCION PARA LA CANTIDAD AGREGADA

function agregarEventoCantidad() {
    productos.forEach((producto) => {
        const inputCantidad = document.getElementById(`cantidad-${producto.id}`);
        
        if (!inputCantidad) {
            return;
        }

        let mensajeError = document.getElementById(`error-${producto.id}`);
        
        if (!mensajeError) {
            mensajeError = document.createElement("p");
            mensajeError.id = `error-${producto.id}`;
            inputCantidad.parentNode.appendChild(mensajeError);
        }

        inputCantidad.addEventListener("change", (e) => {
            const nuevaCantidad = parseInt(e.target.value, 10);
            if (isNaN(nuevaCantidad) || nuevaCantidad <= 0) {
                mensajeError.textContent = "Agregue cantidad válida.";
                producto.cantidad = 0;
            } else {
                mensajeError.textContent = "";
                producto.cantidad = nuevaCantidad;
            }
        });
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

cargarCarrito();

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

//FILTRO POR MARCA 

let listaMarcas = document.getElementById("marcas");

const marcasUnicas = [];
for (let i = 0; i < productos.length; i++) {
    const marca = productos[i].marca;
    if (!marcasUnicas.includes(marca)) {
        marcasUnicas.push(marca);
    }
}

marcasUnicas.forEach((marca) => {
    const marcaItem = document.createElement("li");
    marcaItem.textContent = marca;
    marcaItem.classList.add("marca-item");

    marcaItem.onclick = () => {
        const productosFiltrados = productos.filter((producto) => producto.marca.toLowerCase() === marca.toLowerCase());
        mostrarProductos(productosFiltrados);
    };

    listaMarcas.appendChild(marcaItem);
});