// -DOM y Eventos

// -NADA de console, prompt y alert

// -localstorage(guardar, recuperar, modificar, borrar)

// -CSS básico

// -Arrays de objetos

// -MINIMO 2 funciones de orden superior DIFERENTES

// -NADA de JS en el html



const items = document.getElementById("items");
const menuCarga = document.createElement("div");
menuCarga.innerHTML = ` <form id="menuCargaCatalogo" action="" method="post">
                        <p>Nuevo Item</p>
                        <input type="text" id="marca" placeholder="Ingrese la marca">
                        <input type="text" id="modelo" placeholder="Ingrese el modelo">
                        <input type="number" id="precio" placeholder="Ingrese el precio">
                        <button id="agregar">Agregar</button>
                        </form> `;                        
items.appendChild(menuCarga);

const productos = []

class datoProducto {
    constructor (marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    };
};
  
const catalogo = document.getElementById('contenedorProductos');  
catalogo.innerHTML = `<h3>Marca: 
                        ${productos.map(producto => `${producto.marca}`)}
                        </h3>
                        <p>Modelo: 
                        ${productos.map(producto => `${producto.modelo}`)}
                        </p>
                        <p>Precio: $ 
                        ${productos.map(producto => `${producto.precio}`)}
                        </p>`
catalogo.appendChild(card)

    const nuevoProducto = new datoProducto(marca, modelo, precio);
    productos.push(nuevoProducto);
    console.log(productos)


// agregarProducto(productos)
// console.log(productos)
    
// function agregarItem () {
//      addButton = document.querySelectorAll("#agregar")
//         addButton.forEach(button => {
//             button.onclick = (e) => {
//                 const idItem = e.currentTarget.id
//                 const itemElegido = productos.find(producto => producto.id == idItem)
//                 productos.push(itemElegido)
//                 console.log(productos)
    
//                 localStorage.setItem("productos", JSON.stringify(productos))
//             }
//         })
//     }
