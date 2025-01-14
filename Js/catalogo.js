// -DOM y Eventos

// -NADA de console, prompt y alert

// -localstorage(guardar, recuperar, modificar, borrar)

// -CSS básico

// -Arrays de objetos

// -MINIMO 2 funciones de orden superior DIFERENTES

// -NADA de JS en el html


const items = document.getElementById("items");
const menuCarga = document.createElement("div");
menuCarga.innerHTML = `<p>Marca</p>
                       <input type="text" id="marca" placeholder="Ingrese la marca">
                        <p>Modelo</p>
                        <input type="text" id="modelo" placeholder="Ingrese el modelo">
                        <p>Precio</p>
                        <input type="number" id="precio" placeholder="Ingrese el precio">
                        <button id="agregar">Agregar</button>`;
items.appendChild(menuCarga);

const productos = []

class datoProducto {
    constructor (marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    };
};

let productoNuevo = document.getElementById("contenedorProductos")

function agregarProducto(agregarCelular) {
    agregarCelular.forEach((celular) => {
        const card = document.createElement("div")
        celular.innerHTML = `<h3>${celular.marca}</h3>
                             <p>${celular.modelo}</p>
                             <p>${celular.precio}</p>`
        
        contenedorProductos.appendChild(card)                     
    })

    const nuevoProducto = new datoProducto(marca, modelo, precio);
    productos.push(nuevoProducto);

    agregarItem()
}
agregarProducto(productos)
console.log(productos)
    
function agregarItem () {
     addButton = document.querySelectorAll("#agregar")
        addButton.forEach(button => {
            button.onclick = (e) => {
                const idItem = e.currentTarget.id
                const itemElegido = productos.find(producto => producto.id == idItem)
                productos.push(itemElegido)
                console.log(productos)
    
                localStorage.setItem("productos", JSON.stringify(productos))
            }
        })
    }

