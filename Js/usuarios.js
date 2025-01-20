// SIGNIN USUARIOS

let registroUsuario = JSON.parse(localStorage.getItem("registroUsuario")) || [];

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
            function usuarioNuevo(){
            let cambiarBoton = document.getElementById("botonCambiar");
            cambiarBoton.innerHTML = usuarioUsuario;
            registroUsuario.push(usuarioUsuario)
            localStorage.setItem("registroUsuario", JSON.stringify(registroUsuario));
            };
        };
        const usuarioActual = JSON.parse(localStorage.getItem("registroUsuario")) || [];
        registroUsuario.push(usuarioActual)
        usuarioNuevo()

        //LOGRO QUE EN EL LOCALSTORAGE SE ALMACENE EL USUARIO, PERO NO LOGRO QUE QUEDE AL REFRESCAR LA PAGINA.
        //LA LOGICA DEBE ESTAR MAL, VER SI USANDO FILTER U OTRO METODO PUEDO LOGRARLO.
    }
);

