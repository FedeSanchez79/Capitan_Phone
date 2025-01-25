let carrito = document.getElementById("items")

let itemsCatalogo = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito(carritoItems) {
    if (!carritoItems || carritoItems.length === 0) {
        return actualizarVistaCarrito();;
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
                           <div><i id="deleteCarrito" class="bi bi-trash"></i></div>`;
        carrito.appendChild(items);

        //TOTAL DE CARRITO

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
        const elementoTotal = document.getElementById("total");
            if (elementoTotal) {
            elementoTotal.value = `u$s ${total.toFixed(2)}`;
            }
        }
        actualizarTotal();
    });
    const limpiarCarrito = document.getElementById("items");
        if (limpiarCarrito) {
            const botonVaciar = document.createElement("div");
            botonVaciar.innerHTML = `<button id="vaciar">Vaciar carrito</button>`;
            limpiarCarrito.appendChild(botonVaciar);
            const vaciar = document.getElementById("vaciar");
            vaciar.addEventListener("click", limpiarLocal);
        }
}
mostrarCarrito(itemsCatalogo)


function limpiarLocal() {
    localStorage.removeItem("carrito");
    itemsCatalogo.length = 0;
    actualizarVistaCarrito();
    actualizarTotal();
} 

function actualizarVistaCarrito() {
    const carritoListado = document.getElementById("items"); 
    if (carritoListado) {
        carritoListado.innerHTML = ""; 
        carritoListado.innerHTML = `<p class="carritoVacio">Tu carrito está vacío <i class="bi bi-emoji-frown"></i></p>`;
    } 
}