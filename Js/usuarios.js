// -DOM y Eventos (LISTO)

// -NADA de console, prompt y alert (LISTO)

// -localstorage(guardar LISTO(en usuarios.js), recuperar LISTO(en catalogo.js), modificar, borrar)

// -CSS básico (LISTO)

// -Arrays de objetos (Use funcion contructora - LISTO)

// -MINIMO 2 funciones de orden superior DIFERENTES (forEach y filter en catalogo)

// -NADA de JS en el html (LISTO)

// SIGNIN USUARIOS

let registroUsuario = JSON.parse(localStorage.getItem("registroUsuario"));

    class DatosUsuario {
        constructor (nombre, apellido,mail, usuario, contrasena){
            this.nombre = nombre;
            this.apellido = apellido;
            this.mail = mail;
            this.usuario = usuario;
            this.contrasena = contrasena;
        };
    };

let ingresar = document.getElementsByClassName(`botonLogin`)[0];

ingresar.addEventListener("click", function(){
    let usuarioNombre = document.getElementById("nombre").value;
    let usuarioApellido = document.getElementById("apellido").value;
    let usuarioMail = document.getElementById("mail").value;
    let usuarioUsuario = document.getElementById("usuario").value;
    let usuarioContrasena = document.getElementById("contrasena").value;
    let usuarioRepetirContrasena = document.getElementById("repetirContrasena").value;
                
    const nuevoUsuario = new DatosUsuario(usuarioNombre, usuarioApellido,usuarioMail, usuarioUsuario, usuarioContrasena);
    registroUsuario.push(nuevoUsuario);
    localStorage.setItem("registroUsuario", JSON.stringify(registroUsuario));

        if(usuarioNombre === "" || usuarioApellido === "" || usuarioMail === "" || usuarioUsuario === "" || usuarioContrasena.length < 8 || usuarioContrasena.length > 12 || usuarioContrasena !== usuarioRepetirContrasena){
            contrasenaIncorrecta.innerHTML = `<p>Acceso denegado vuelva a intentarlo.</p>`;
            return;
        }else{
            let cambiarBoton = document.getElementById("botonCambiar");
            cambiarBoton.innerHTML = usuarioUsuario;
        };
    }
);


        


