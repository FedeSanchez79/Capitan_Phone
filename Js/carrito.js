let carrito = document.getElementById("items")

let itemsCatalogo = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito(carritoItems) {
    if (!carritoItems || carritoItems.length === 0) {
        return;
    }
    carritoItems.forEach((listadoItems) => {
        const items = document.createElement("div");
        items.innerHTML = `
            <small>Celular</small>
            <h3>${listadoItems.marca}</h3>
            <small id="tituloCantidad">Cantidad</small></br> 
            <input type="number" value="1"></input>
            <small>Precio</small>
            <p>u$s ${listadoItems.precio}</p>
            <small>Subtotal</small>
            <p>u$s </p>
            <i class="bi bi-trash"></i>`;
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
    const total = itemsCatalogo.reduce((acumulador, producto) => acumulador + parseInt(producto.precio), 0);
    document.getElementById("total").value = `u$s ${total}`;
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