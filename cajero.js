const prompt = require('prompt-sync')();

function cajero() {
    console.log("Bienvenido al cajero automático");
    let saldo = 1000;
    while (true) {
        console.log("\nSeleccione una opción:");
        console.log("1. Consultar saldo");
        console.log("2. Depositar dinero");
        console.log("3. Retirar dinero");
        console.log("4. Salir");
        let opcion = prompt("Ingrese el número de la opción deseada: ");    
        if (opcion === '1') {
            console.log(`Su saldo actual es: $${saldo}`);
        } else if (opcion === '2') {
            let deposito = parseFloat(prompt("Ingrese la cantidad a depositar: $"));      
            if (!isNaN(deposito) && deposito > 0) {
                saldo += deposito;
                console.log(`Has depositado $${deposito}. Nuevo saldo: $${saldo}`);
            } else {
                console.log("Cantidad inválida. Intente de nuevo.");
            }   
        } else if (opcion === '3') {
            let retiro = parseFloat(prompt("Ingrese la cantidad a retirar: $"));        
            if (!isNaN(retiro) && retiro > 0 && retiro <= saldo) {
                saldo -= retiro;
                console.log(`Has retirado $${retiro}. Nuevo saldo: $${saldo}`);
            } else {
                console.log("Cantidad inválida o saldo insuficiente. Intente de nuevo.");
            }   
        } else if (opcion === '4') {
            console.log("Gracias por usar el cajero automático. ¡Hasta luego!");
            break;
        } else {
            console.log("Opción inválida. Por favor seleccione una opción válida.");
        }
    }
}

cajero();   
