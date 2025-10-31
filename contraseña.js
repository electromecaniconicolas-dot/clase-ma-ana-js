const prompt = require('prompt-sync')();

function password(password) {
    let longitud = password.length;
    let tieneNumero = /\d/.test(password);
    let tieneMayuscula = /[A-Z]/.test(password);
    let tieneMinuscula = /[a-z]/.test(password);
    if (longitud >= 8 && tieneNumero && tieneMayuscula && tieneMinuscula) {
        return "true.";
    } else {
        return "false.";
    }
}
let password = prompt("Ingresa una contraseña");
let resultado = contraseña(password);
console.log(resultado);


