const prompt = require('prompt-sync')();

function propina(propinaPorcentaje, cuentaTotal) {
    let propinaCantidad = (propinaPorcentaje / 100) * cuentaTotal;
    return propinaCantidad;
}
let porcentajeStr = prompt("Ingresa el porcentaje de propina que deseas dejar: ");
let totalCuentaStr = prompt("Ingresa el total de la cuenta: ");


let porcentaje = parseFloat(porcentajeStr);
let totalCuenta = parseFloat(totalCuentaStr);

if (isNaN(porcentaje) || isNaN(totalCuenta)) {
    console.log("Por favor ingresa valores numéricos válidos para porcentaje y total de la cuenta.");
} else {
    let cantidadPropina = propina(porcentaje, totalCuenta);
    console.log("La cantidad de propina que debes dejar es: " + cantidadPropina.toFixed(2));
}

