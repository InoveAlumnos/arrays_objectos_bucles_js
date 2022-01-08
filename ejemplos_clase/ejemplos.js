'use strict';

/* Inove Coding School
 * Ejemplos de código de clase.
 * Control de flujo 1: Bucles
 * Este archivo sirve como borrador con el código visto en la clase.
 */

// Ejemplo de bucle while con salida por modificación de respuesta al condicional

var condicionDePermanencia = true;
while (condicionDePermanencia) {
    //Acción: Código a ejecutar en cada iteración
    console.log("hola");
    condicionDePermanencia = false;
}

// Ejemplo de bucle while con salida por sentencia break

condicionDePermanencia = true;
while (condicionDePermanencia) {
    //Acción: Código a ejecutar en cada iteración
    console.log("hola");
    break;
}

// Ejemplo de bucle while con salida por contador incremental

condicionDePermanencia = 0;
while (condicionDePermanencia < 10) {
    //Acción: Código a ejecutar en cada iteración
    console.log(condicionDePermanencia);
    condicionDePermanencia++;
}
// Ejemplo de bucle while con salida por contador decremental

condicionDePermanencia = 10;
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

// Ejemplo de bucle do-while con salida por contador incremental.
var result = '';
var i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result);
// Resultado esperado: "12345"

// Caso práctico de uso: campo de contraseña [hacer en VSCODE]

var password = "inove";
var input = "";
var attempts = 5;

do {
    input = prompt("Bienvenido, ingrese la contraseña, tiene " + attempts + " intentos")
    if (attempts < 1) {
        break;
    } else { attempts--; }
} while (input != password);

if (input == password) {
    console.log("Bienvenido!");
} else {
    console.log("Inténtalo nuevamente");
}
// Ejemplo de aplicación de bucle for
for (var i = 0; i < 10; i++) {
    console.log(`El valor de la variable "ì" es:` + i);
}

// Ejemplo de plantilla de cadena de texto

var plantilla1 = `Esta es una plantilla de texto`
var plantilla2 = `${plantilla1} con información intercalada`

console.log(plantilla1);
console.log(plantilla2);

//Aplicación práctica de plantilla de cadena de texto

var curso = prompt("Indique el nombre del curso:");
var clases = prompt("Indique cantidad de clases:");
var msj = "Ingrese el nombre del módulo:"

var plantilla =
    `Bienvenido a este curso de ${curso}, en estas ${clases} clases usted aprenderá a:
>  ${prompt(msj)}
>  ${prompt(msj)}
>  ${prompt(msj)}
>  ${prompt(msj)}
Comencemos!`;

console.log(plantilla);


// Ejemplo de uso de corchetes

var palabra = "Nubes";
console.log(palabra[0]); // Imprime N

//Aplicación práctica de plantilla de cadena de texto y bucles

var curso = prompt("Indique el nombre del curso:");
var modulos = prompt("Indique cantidad de clases:");
var msj = "Ingrese el nombre del módulo:"

var plantilla =
    `Bienvenido a este curso de ${curso}, en estas ${modulos} clases usted aprenderá a:`;
console.log(plantilla);
for (var i = 1; i <= modulos; i++) {
    console.log(`> Clase ${i}: ${prompt(msj)}.`)
}
console.log("Comencemos!");

// Método .length

var palabra = "Nubes";
console.log(`La longitud de la palabra es: ${palabra.length}`);

//Método .toString()

var caja = 10; // Variable numérica
console.log(`El resultado de sumar números es: ${caja + 4}`);
console.log(`El resultado de sumar texto es: ${caja.toString() + 4}`);

// Método isNaN()

var caja1 = "10";
var caja2 = "diez";
console.log(`El string ingresado, ${caja1}, es otra cosa más que un número?: ${isNaN(caja1)}`);
console.log(`El string ingresado, ${caja2}, es otra cosa más que un número?: ${isNaN(caja2)}`);


// Misión del día

var usuarios = 0;
var nombre = "";
var apellido = "";
var edad = "";
var Pasatiempo = "";
var plantilla = undefined;


do {
    usuarios = prompt("Cuantos usuarios va a ingresar al sistema?");
    if (isNaN(usuarios)) {
        alert("Los datos ingresados son invalidos, por favor, vuelva a intentarlo.");
    } else {
        usuarios = parseInt(usuarios);
        break;
    }
} while (true)

for (var i = 1; i <= usuarios; i++) {
    nombre = prompt(`Indique el nombre del usuario ${i}`);
    apellido = prompt(`Indique el apellido de ${nombre}`);
    do {
        edad = prompt(`¿Qué edad tiene ${nombre} ${apellido}?`);
        if (isNaN(edad)) {
            alert("Los datos ingresados son invalidos, por favor, vuelva a intentarlo.");
        } else {
            edad = parseInt(edad);
            break;
        }
    } while (true)
    pasatiempo = prompt(`¿Cual es el pasatiempo de ${nombre} ${apellido}?`);
    plantilla = `El usuario ${nombre} ${apellido} tiene ${edad} años de edad.
Su pasatiempo es: ${pasatiempo}.
Se ha ingresado como el usuario número ${i} en la lista.`;
    console.log(plantilla);
    console.log(`Cantidad de caracteres: ${plantilla.length}`);

    if (confirm(`restan ${usuarios - i} usuarios por ingresar, desea continuar?`)) {

    } else { break; }

}

