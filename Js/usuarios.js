// USUARIOS:
// 1. Crear un registro de usuario
// 2. Una vez creado darle la posibilidad de ser admin o usuario normal
// 3. Si es admin darle acceso a modificar el catalogo, acceso a la base de datos y a la tabla de usuarios


// SIGNIN USUARIOS

const registroUsuario = [];

SignInUsuario = () => {
class DatosUsuario {
    constructor (nombre, apellido, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo
    };
    esAdmin(){
        return this.nombre === "Federico" && this.apellido === "Sanchez" && this.correo === "fedesanchez@gmail.com";
    };
};

do{
    let usuarioNombre = prompt("Ingrese su nombre");
    let usuarioApellido = prompt("Ingrese su apellido");
    let usuarioCorreo = prompt("Ingrese su correo electrónico");
    let usuarioUsuario = new DatosUsuario (usuarioNombre, usuarioApellido, usuarioCorreo);
    registroUsuario.push(usuarioUsuario);
    alert(`Bienvenido ${usuarioNombre} ${usuarioApellido}, usted esta registrado correctamente`);

    }while(registroUsuario.length === 0){
        alert(`Registro finalizado`);
}

    if(esAdmin()){
        alert(`Bienvenido ${usuarioNombre} ${usuarioApellido}, usted es Administrador`);
    }else if(usuarioNombre === "" || usuarioApellido === "" || usuarioCorreo === ""){
        alert(`Debe completar todos los campos`);
    }else {
        alert(`Bienvenido ${usuarioNombre} ${usuarioApellido}, usted esta registrado correctamente`);
    };
};

SignInUsuario()

console.log(registroUsuario)
