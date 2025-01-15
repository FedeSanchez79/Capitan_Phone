// -DOM y Eventos

// -NADA de console, prompt y alert (LISTO)

// -localstorage(guardar, recuperar, modificar, borrar)

// -CSS básico (LISTO)

// -Arrays de objetos (Use funcion contructora - LISTO)

// -MINIMO 2 funciones de orden superior DIFERENTES (Use .map y .forEach en catalogo y .reduce en carrito pero no esta en ejecución todavia)

// -NADA de JS en el html (LISTO)

// SIGNIN USUARIOS

const registroUsuario = [];

    class DatosUsuario {
        constructor (nombre, apellido, usuario, contrasena){
            this.nombre = nombre;
            this.apellido = apellido;
            this.usuario = usuario;
            this.contrasena = contrasena;
        };
    };

    let ingresar = document.getElementsByClassName(`botonLogin`)[0];

    ingresar.addEventListener("click", function(){
    let usuarioNombre = document.getElementById("nombre").value;
    let usuarioApellido = document.getElementById("apellido").value;
    let usuarioUsuario = document.getElementById("usuario").value;
    let usuarioContrasena = document.getElementById("contrasena").value;
    let usuarioRepetirContrasena = document.getElementById("repetirContrasena").value;

    if (usuarioContrasena !== usuarioRepetirContrasena) {
        alert("Las contraseñas no coinciden.");
        return;
    };
            
    const nuevoUsuario = new DatosUsuario(usuarioNombre, usuarioApellido, usuarioUsuario, usuarioContrasena);

    registroUsuario.push(nuevoUsuario);

    localStorage.setItem("registroUsuario", JSON.stringify(registroUsuario));
});
        



        


