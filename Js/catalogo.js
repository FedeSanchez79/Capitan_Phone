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
    {
        id: 4,
        marca: "Motorola",
        modelo: "A15",
        precio: 310
    },
    {
        id: 5,
        marca: "Iphone",
        modelo: "13",
        precio: 900
    },
    {
        id: 6,
        marca: "Samsung",
        modelo: "A35",
        precio: 650
    },
    {
        id: 7,
        marca: "Iphone",
        modelo: "12",
        precio: 900
    },
    {
        id: 8,
        marca: "Samsung",
        modelo: "A06",
        precio: 210
    },
    {
        id: 9,
        marca: "Motorola",
        modelo: "G04",
        precio: 120
    },
    {
        id: 10,
        marca: "Xiaomi",
        modelo: "A3",
        precio: 310
    },
    {
        id: 11,
        marca: "Iphone",
        modelo: "15",
        precio: 1600
    },
    {
        id: 12,
        marca: "Samsung",
        modelo: "S24",
        precio: 1500
    },
    {
        id: 13,
        marca: "Xiaomi",
        modelo: "Note 13",
        precio: 510
    },
    {
        id: 14,
        marca: "Motorola",
        modelo: "A35",
        precio: 680
    },
    {
        id: 15,
        marca: "Iphone",
        modelo: "12",
        precio: 1100
    },
    {
        id: 16,
        marca: "Motorola",
        modelo: "Edge 50",
        precio: 1600
    },
    {
        id: 17,
        marca: "Samsung",
        modelo: "A55",
        precio: 820
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