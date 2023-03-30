var nombreUsuario = "usuarioprueba123";
var contrasena = "12345";

function autenticacion(usuario, ingreseContrasena) {
    usuario; 
    ingreseContrasena;

    if (nombreUsuario===usuario) {
        alert ("autenticacion correcta");
        }else if (nombreUsuario != usuario || contrasena != ingreseContrasena) {

        }
}
autenticacion(prompt("ingrese usuario"),prompt("ingreseContrasena"));
