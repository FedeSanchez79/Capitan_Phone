// -DOM y Eventos (LISTO)

// -NADA de console, prompt y alert (LISTO)

// -localstorage(guardar LISTO(en usuarios.js), recuperar LISTO(en catalogo.js), modificar, borrar)

// -CSS básico (LISTO)

// -Arrays de objetos (Use funcion contructora - LISTO)

// -MINIMO 2 funciones de orden superior DIFERENTES (PENDIENTE)

// -NADA de JS en el html (LISTO)

// SIGNIN USUARIOS

let registroUsuario = JSON.parse(localStorage.getItem("registroUsuario"));

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

    if (usuarioContrasena.length < 8 || usuarioContrasena.length > 12){
        let contrasenaCorta = document.getElementById("contrasenaIncorrecta");
        contrasenaCorta.innerHTML = `<p>Debe ingresar entre 8 y 12 números</p>`
    }else if (usuarioContrasena !== usuarioRepetirContrasena) {
        contrasenaIncorrecta.innerHTML = `<p>Las contraseñas no coinciden.</p>`;
    }else{
        contrasenaIncorrecta.innerHTML = `<p>Acceso permitido.</p>`;
    };
            
const nuevoUsuario = new DatosUsuario(usuarioNombre, usuarioApellido, usuarioUsuario, usuarioContrasena);
registroUsuario.push(nuevoUsuario);
localStorage.setItem("registroUsuario", JSON.stringify(registroUsuario));

    if(usuarioNombre === "" || usuarioApellido === "" || usuarioUsuario === "" || usuarioContrasena.length < 8 || usuarioContrasena.length > 12 || usuarioContrasena !== usuarioRepetirContrasena){
        contrasenaIncorrecta.innerHTML = `<p>Acceso denegado vuelva a intentarlo.</p>`;
        return;
    }else{
        let cambiarBoton = document.getElementById("botonCambiar");
        cambiarBoton.innerHTML = usuarioNombre;
    }
});


        


