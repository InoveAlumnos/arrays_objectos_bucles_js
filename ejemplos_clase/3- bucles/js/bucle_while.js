'use strict';

// Ejemplo de bucle while con salida por contador incremental
let i = 0;
while (i < 5) {
	console.log(i);
	i++;
};

i = 0;
do {
	console.log(i);
	i++;	
}
while (i > 20)

// Ejemplo de bucle while con salida por contador decremental
let condicionDePermanencia = 10;
while (condicionDePermanencia > 0) {
    //Acción: Código a ejecutar en cada iteración
    console.log(condicionDePermanencia);
    condicionDePermanencia--;
}

// Ejemplo de bucle do-while con salida por contador decremental
condicionDePermanencia = 10;
do {
    //Acción: Código a ejecutar en cada iteración
    console.log(condicionDePermanencia);
    condicionDePermanencia--;

} while (condicionDePermanencia > 0)


// Caso práctico de uso del bucle while
// Descomentar para probar el código
/*
var password = "inove";
var input = "";
var attempts = 3;

do {
    input = prompt(`Bienvenido, ingrese la contraseña, tiene ${attempts} intentos`)
    if (attempts < 1) {
		console.log("se acabaron los intentos permitidos (salida por break)");
        break;  // salir dle bucle, condición de finalización abrupta
    }
    else { 
		attempts--; 
	}
} while (input != password);

// Terminado el bucle, analizamos el resultado
if (input == password) {
    console.log("Bienvenido!");
} else {
    console.log("Inténtalo nuevamente");
}
*/