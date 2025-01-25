let carrito = document.getElementById("items")

let itemsCatalogo = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito(carritoItems) {
    if (!carritoItems || carritoItems.length === 0) {
        return;
    }
    carritoItems.forEach((listadoItems) => {
        const items = document.createElement("div");
        items.className = "itemCarrito"
        items.innerHTML = `<div><small>Celular</small>
                           <h3>${listadoItems.marca}</h3></div>
                           <div><small id="tituloCantidad">Cantidad</small></br> 
                           <p>${listadoItems.cantidad}</p></div>
                           <div><small>Precio</small>
                           <p>u$s ${listadoItems.precio}</p></div>
                           <div><small>Subtotal</small>
                           <p id="subtotal">u$s ${listadoItems.cantidad * listadoItems.precio} </p></div>
                           <div><i class="bi bi-trash"></i></div>`;
        carrito.appendChild(items);
    });
}
mostrarCarrito(itemsCatalogo)


const totalCarrito = document.getElementById("items");
const inputTotal = document.createElement("div");
inputTotal.innerHTML = `<h4>Total:</h4>
                        <input id="total" placeholder="Total"></input>`
totalCarrito.appendChild(inputTotal)  

function actualizarTotal() {
    let total = 0;
    total = itemsCatalogo.reduce((acumulador, producto) => {
        return acumulador + (producto.cantidad * producto.precio);
    }, 0);
    document.getElementById("total").value = `u$s ${total.toFixed(2)}`;
}

actualizarTotal();

function limpiarLocal() {
    localStorage.removeItem("carrito");
    itemsCatalogo.length = 0;
    actualizarVistaCarrito();
    actualizarTotal();
}

const limpiarCarrito = document.getElementById("items");
if (limpiarCarrito) {
    const botonVaciar = document.createElement("div");
    botonVaciar.innerHTML = `<button id="vaciar">Vaciar carrito</button>`;
    limpiarCarrito.appendChild(botonVaciar);

    const vaciar = document.getElementById("vaciar");
    vaciar.addEventListener("click", limpiarLocal);
} 

function actualizarVistaCarrito() {
    const carritoListado = document.getElementById("items"); 
    if (carritoListado) {
        carritoListado.innerHTML = ""; 
        carritoListado.innerHTML = `<p class="carritoVacio">Tu carrito está vacío <i class="bi bi-emoji-frown"></i></p>`;
    } 
}