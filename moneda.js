const prompt = require('prompt-sync')();

function monedaCOP() {
   
    const opcion = prompt(
        'Selecciona la moneda a la que deseas convertir tu dinero en COP:\n1) USD\n2) EUR\nIngresa 1 o 2: '
    ).trim();

   
    const cantidadStr = prompt('Ingresa la cantidad en COP que deseas convertir: ').trim();
    const cantidadCOP = parseFloat(cantidadStr.replace(',', '.'));

    if (isNaN(cantidadCOP) || cantidadCOP <= 0) {
        return 'Por favor ingresa una cantidad válida mayor que cero.';
    }

    
    const TASA_USD = 4800; 
    const TASA_EUR = 5500; 

    let resultado;
    switch (opcion) {
        case '1':
            resultado = cantidadCOP / TASA_USD;
            return `${cantidadCOP} COP son aproximadamente ${resultado.toFixed(2)} USD.`;
        case '2':
            resultado = cantidadCOP / TASA_EUR;
            return `${cantidadCOP} COP son aproximadamente ${resultado.toFixed(2)} EUR.`;
        default:
            return 'Opción no válida. Por favor selecciona 1 para USD o 2 para EUR.';
    }
}

const resultado = monedaCOP();
console.log(resultado);



  

    
 


    
   
    

