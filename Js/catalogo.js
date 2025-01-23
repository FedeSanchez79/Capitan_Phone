// REHACER EL CODIGO DE CATALOGO
const productos = [
    {
        id: 0,
        marca: "Iphone",
        modelo: "11",
        precio: 600
    },
    {
        id: 1,
        marca: "Motorola",
        modelo: "G84",
        precio: 400
    },
    {
        id: 2,
        marca: "Samsung",
        modelo: "A15",
        precio: 350
    },
    {
        id: 3,
        marca: "Xiaomi",
        modelo: "Redmi 13C",
        precio: 300
    },
];
let catalogoProductos = [];
let listado = document.getElementById("contenedorProductos");
function agregarItem (item){
    item.forEach((itemNuevo) => {
        const card = document.createElement("div");
          card.innerHTML = `<img class="productoImagen" src="../assets/images/iphone_imagen.jpg" alt="imagen de un iphone">
        <div class="productoInfo">
        <h3 class="modelo">${itemNuevo.marca}</h3>
        <p class="modelo">${itemNuevo.modelo}</p>
        <p class="precio">u$s ${itemNuevo.precio}</p>
        <button class="agregar">Agregar</button>`;
listado.appendChild(card)  
localStorage.setItem("carrito", JSON.stringify(catalogoProductos))
})
agregarEventoBotones()
}
agregarItem(productos)

let contadorCarrito = 0;
const numero = document.getElementById("numero1");

function agregarEventoBotones() {
    const botonesAgregar = document.querySelectorAll(".agregar");
    botonesAgregar.forEach((boton, index) => {
        boton.onclick = () => {
            const productoSeleccionado = productos[index];
            const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
            carritoActual.push(productoSeleccionado);
            localStorage.setItem("carrito", JSON.stringify(carritoActual));
            incrementarCarrito();
        };
    });
}

function incrementarCarrito() {
    contadorCarrito++;
    numero.textContent = contadorCarrito;
}

const marcas = ["iphone", "motorola", "xiaomi", "samsung"];
const listaMarcas = document.getElementById("marcas")
for (const marca of marcas){
    let marcaTelefonos = document.createElement("li")
    marcaTelefonos.innerHTML = marca
    listaMarcas.appendChild(marcaTelefonos)                            
}