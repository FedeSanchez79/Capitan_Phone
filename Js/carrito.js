//LLAMAR A PRODUCTOS DEL LOCALSTORAGE

const productos = JSON.parse(localStorage.getItem("productos")) || [];

//HACER UN FILTER PARA PODER TRAER LOS ELEMENTO DE ACUERDO A LA LLAMADA

if (productos.length === 0){
    let carritoListado = document.getElementsByClassName("contenedorCarrito")[0];
    carritoListado.innerHTML = `<p class="carritoVacio">Tu carrito esta vacio <i class="bi bi-emoji-frown"></i></p>`
    let nuevoListado = document.createElement("div")
    nuevoListado.className = "carritoProductos"
    carritoListado.appendChild(nuevoListado)
}else{

for(const producto of productos){
    let carritoListado = document.getElementsByClassName("contenedorCarrito")[0];    
    let carritoCard = document.createElement("div");
    carritoCard.className = "carritoProducto";
    carritoListado.appendChild(carritoCard);

    // NO ME TOMA LA IMAGEN, VER PORQUE (**PENDIENTE**)

    // let carritoImagen = document.createElement("img");
    // carritoImagen.className = "carritoImagen";
    // carritoImagen.innerHTML = `<img" src="../assets/images/iphone.png" alt="imagen de un iphone">`;
    // carritoCard.appendChild(carritoImagen);

    let carritoProductoTitulo = document.createElement("div");
    carritoProductoTitulo.innerHTML = `<small>Celular</small>
                                    <h3>${producto.marca}</h3>`;
    carritoCard.appendChild(carritoProductoTitulo);
    let carritoProductoCantidad = document.createElement("div");
    carritoProductoCantidad.innerHTML = `<small id="tituloCantidad">Cantidad</small></br> 
                                        <input type=""number"></input>`;
                                        //no se si es una buena practica agregar un id aca pero lo hago por el margin que tiene el input
    carritoCard.appendChild(carritoProductoCantidad);  
    let carritoProductoPrecio = document.createElement("div");
    carritoProductoPrecio.innerHTML = `<small>Precio</small>
                                    <p>u$s ${producto.precio}</p>`;
    carritoCard.appendChild(carritoProductoPrecio);
    let carritoProductoSubtotal = document.createElement("div");
    carritoProductoSubtotal.innerHTML = `<small>Subtotal</small>
                                        <p>u$s </p>`;
    carritoCard.appendChild(carritoProductoSubtotal);
    let botonEliminarCarrito = document.createElement("button");
    botonEliminarCarrito.className = "carritoProductoEliminar"
    botonEliminarCarrito.innerHTML = `<i class="bi bi-trash"></i>`
    carritoCard.appendChild(botonEliminarCarrito) 
    };
};

//ESTOY TOMANDO LOS OBJETOS CREADOS CON EL BOTON AGREGAR EN CATALOGO.JS, MODIFICAR PARA QUE TOME LOS ELEMENTOS AL APRETAR EL BOTON COMPRAR. (***PENDIENTE***)
//PROBAR CREANDO UN FILTER EN CATALOGO Y SUBIENDOLO AL LOCALSTORAGE CON UNA CLAVE DIFERENTE Y HACER UN GETITEM DESDE ACA.

function eliminarDelCarrito(id) {
    const nuevoCarrito = productos.filter(producto => producto.id !== id);
    productos.length = 0;
    nuevoCarrito.forEach(producto => productos.push(producto));
    localStorage.setItem("productosCarrito", JSON.stringify(productos));
    mostrarProductos();
};

//USO DE REDUCE PARA EL TOTAL DEL CARRITO

const totalCarrito = document.getElementById("items");
const inputTotal = document.createElement("div");
inputTotal.innerHTML = `<h4>Total:</h4>
                        <input id="total" placeholder="Total"></input>`
totalCarrito.appendChild(inputTotal)                        
function actualizarTotal() {
    const total = productos.reduce((acumulador, producto) => acumulador + parseInt(producto.precio), 0);
    document.getElementById("total").value = `u$s ${total}`;
}
actualizarTotal();

//USO DE REMOVE LOCALSTORAGE PARA LIMPIAR EL CARRITO (DEBO CORREGIR PARA QUE NO LIMPIE EL CATALOGO)

const limpiarCarrito = document.getElementById("items");
const botonVaciar = document.createElement("div");
botonVaciar.innerHTML = `<button id="vaciar">Vaciar carrito</button>`;
limpiarCarrito.appendChild(botonVaciar);

function limpiarLocal() {
    localStorage.removeItem("productos"); 
    productos.length = 0; 
    actualizarVistaCarrito(); 
    actualizarTotal(); 
}

const vaciar = document.getElementById("vaciar")
vaciar.addEventListener("click", limpiarLocal);

function actualizarVistaCarrito() {
    const carritoListado = document.getElementsByClassName("contenedorCarrito")[0];
    carritoListado.innerHTML = `<p class="carritoVacio">Tu carrito está vacío <i class="bi bi-emoji-frown"></i></p>`;
}
