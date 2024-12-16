// LOGIN y LOGOUT USUARIOS

// 1.- ingreso usuario y contraseña en un array u objeto

// 2.-bucle para respetar los parametros del usuario y contraseña

// 3.- unir con la base de datos

// 4.- condicional para permitir el ingreso del usuario

const usuarios = []
const contrasenas = []

let altaUsuario = prompt("Por favor ingrese su correo electrónico")

let altaContrasena = prompt("Por favor ingrese su contraseña")

let ingresoDatoUsuario = altaUsuario.push(usuarios)
let ingresoDatoContrasena = altaContrasena.push(contrasenas)

while (usuarios !== isNaN && contrasenas == isNaN){
    alert("Usuario o contraseña no válidos")
}

if (usuarios == ("fedesanchez" + "@" + "gmail.com") && contrasenas > 0 && contrasenas < 9999 ){
    alert("Bienvenido FEDERICO")
}