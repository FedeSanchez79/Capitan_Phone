// Recuperamos los datos de la compra desde localStorage
const datosCompra = JSON.parse(localStorage.getItem("datosCompra"));

if (datosCompra) {
    // Mostrar los datos del usuario
    document.getElementById("nombreUsuario").textContent = `Nombre: ${datosCompra.usuario.nombre} ${datosCompra.usuario.apellido}`;
    document.getElementById("emailUsuario").textContent = `Correo electrónico: ${datosCompra.usuario.mail}`;

    // Mostrar los productos del carrito
    const listaProductos = document.getElementById("listaProductos");
    datosCompra.productos.forEach(producto => {
        const item = document.createElement("li");
        item.textContent = `${producto.marca} - Cantidad: ${producto.cantidad} - Precio: u$s ${producto.precio} - Subtotal: u$s ${producto.cantidad * producto.precio}`;
        listaProductos.appendChild(item);
    });

    // Mostrar el total
    document.getElementById("totalAmount").textContent = `u$s ${datosCompra.total.toFixed(2)}`;
} else {
    // Si no hay datos de la compra, redirigir a la página principal
    window.location.href = "../index.html"; // O la ruta de tu página principal
}

// Agrega el evento para el botón "Volver al inicio"
document.getElementById("volverInicio").addEventListener("click", function(event) {
    // Evitar que el enlace funcione de inmediato
    event.preventDefault();

        limpiarLocal();
        // Redirigir al inicio
        window.location.href = "../index.html"; 
});

// Función para limpiar el carrito
function limpiarLocal() {
    localStorage.removeItem("carrito");
    localStorage.removeItem("datosCompra");
    // Aquí puedes agregar más elementos a eliminar si es necesario
}
