const prompt = require('prompt-sync')();

function contador(contar) {
    const longitud = contar.length;
    const textoTrim = contar.trim();
    const numeroDePalabras = textoTrim === "" ? 0 : textoTrim.split(/\s+/).length;
    const longitudSinEspacios = contar.replace(/\s/g, '').length;
    return `La longitud del texto es de ${longitud} caracteres (sin espacios: ${longitudSinEspacios}) y contiene ${numeroDePalabras} palabras.`;
}
const contar = prompt("Ingresa un texto para contar caracteres y palabras: ");
const resultado = contador(contar);
console.log(resultado);
