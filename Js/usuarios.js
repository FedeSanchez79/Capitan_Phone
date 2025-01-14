// -DOM y Eventos

// -NADA de console, prompt y alert

// -localstorage(guardar, recuperar, modificar, borrar)

// -CSS básico

// -Arrays de objetos

// -MINIMO 2 funciones de orden superior DIFERENTES

// -NADA de JS en el html


// SIGNIN USUARIOS


const registroUsuario = [];

    class DatosUsuario {
        constructor (nombre, apellido, usuario, contrasena){
            this.nombre = nombre;
            this.apellido = apellido;
            this.usuario = usuario;
            this.contrasena = contrasena;
        };
        esAdmin(){
            return this.nombre === "Federico" && this.apellido === "Sanchez" && this.usuario === "fedesanchez@gmail.com";
        };
    };

        ingresar.addEventListener("click", function(){
        let usuarioNombre = document.getElementById("nombre").value.trim();
        let usuarioApellido = document.getElementById("apellido").value.trim();
        let usuarioUsuario = document.getElementById("usuario").value.trim();
        let usuarioContrasena = document.getElementById("contrasena").value.trim();
        let usuarioRepetirContrasena = document.getElementById("repetirContrasena").value.trim();

        if (usuarioContrasena !== usuarioRepetirContrasena) {
            alert("Las contraseñas no coinciden.");
            return;
        };
            
        const nuevoUsuario = new DatosUsuario(
            usuarioNombre,
            usuarioApellido,
            usuarioUsuario,
            usuarioContrasena
        );

        registroUsuario.push(nuevoUsuario);

        if (nuevoUsuario.esAdmin()){
            let admin = document.getElementsByClassName("botonLog");
            admin.innerText = `${registroUsuario.nombre}`
        }else {
            let usuarioNoAdmin = document.getElementsByClassName("botonLog");
            usuarioNoAdmin.innerText = `${registroUsuario.nombre}`
        }
    });
        


