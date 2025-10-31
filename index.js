 const prompt = require('prompt-sync')();

console.log("vamos a calcular")
let number = prompt("porfavor ingresa un numero: ")

let operacion = prompt("ingresa la operacion que deseas realizar: suma, resta, multiplicacion, division: ")
 
let number2 = prompt("porfavor ingresa otro numero: ")

 let resta = parseFloat(number) - (parseFloat(number2))

 let multiplicacion = parseFloat(number) * (parseFloat(number2))

 let division = parseFloat(number) / (parseFloat(number2))

 
 let suma = parseFloat(number) + (parseFloat(number2))
    if (operacion == "suma") {
        console.log("el resultado de la suma es: " + suma)
    }
    else if (operacion =="resta") {
        console.log("el resultado de la resta es: " + resta)
    }   
    else if (operacion == "multiplicacion") {
        console.log("el resultado de la multiplicacion es: " + multiplicacion)
    }
    else if (operacion == "division") {
        console.log("el resultado de la division es: " + division)
    }
    else {
        console.log("operacion no valida")
    }


 


