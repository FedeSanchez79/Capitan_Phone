// -DOM y Eventos

// -NADA de console, prompt y alert (LISTO)

// -localstorage(guardar, recuperar, modificar, borrar)

// -CSS básico (LISTO)

// -Arrays de objetos (Use funcion contructora - LISTO)

// -MINIMO 2 funciones de orden superior DIFERENTES (Use .map y .forEach en catalogo y .reduce en carrito pero no esta en ejecución todavia)

// -NADA de JS en el html (LISTO)

//CREAR UN FORM

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

//CREAR UN ARRAY DE OBJETOS USANDO FUNCION CONSTRUCTORA

const productos = []

class datoProducto {
    static id = 0
    constructor (marca, modelo, precio){
        this.id = ++datoProducto.id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    };
};

const nuevoProducto = new datoProducto(marca, modelo, precio);
productos.push(nuevoProducto);
console.log(productos)

//CREAR UN ELEMENTO PARA PODER INCLUIR LOS DATOS DEL ARRAY CREADO ANTERIORMENTE

const catalogoCard = document.getElementById('contenedorProductos');  
const card = document.createElement("div")
card.innerHTML = `<h3>Marca: 
                        ${productos.map(producto => `${producto.marca}`)}
                        </h3>
                        <p>Modelo: 
                        ${productos.map(producto => `${producto.modelo}`)}
                        </p>
                        <p>Precio: $ 
                        ${productos.map(producto => `${producto.precio}`)}
                        </p>`
catalogoCard.appendChild(card)

//CREAR UN EVENTO DONDE PODAMOS INGRESAR DATOS AL ARRAY Y QUE SE MUESTREN EN EL HTML
   
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
