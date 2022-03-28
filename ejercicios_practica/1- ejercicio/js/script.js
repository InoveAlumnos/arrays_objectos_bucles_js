"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Utilice la variable "ejercicio" para indicarle al script que ejercicio ejecutar,
de esta manera podrá ir realizando uno por uno los ejercicios sin que se ejecuten
todos juntos.

*/

// seleccione el ejercicio a ejecutar

let ejercicio = 0;

if (ejercicio == 0) {
    ejercicio = prompt(`Bienvenido, ingrese el número de ejercicio que quiere realizar`);
}

// Ejercicios de sintaxis de "for"
if (ejercicio == 1) {
    // Descomentar cada bloque y encontrar el error de sintaxis :D
    /*for(i=0;<10i++){
        console.log(`el valor de "i" es: ${i}`);
    }
    */
       /*forar i=0;<10;i++){
        console.log(`el valor de "i" es: ${i}`);
    }
    */
       /*for(var i=0;0<10;i++){
        console.log(`el valor de "i" es: ${i}`);
    }
    */
       /*for(var i=0;i>10;i++){
        console.log(`el valor de "i" es: ${i}`);
    }
    */
       /*for(var i=o;i<1o;i++){
        consolelog(`el valor de "i" es: ${i}`);
    }
    */

}

// Plantillas de cadena de texto
if (ejercicio == 2) {
    // Construya un formulario de usuario con: nombre, apellido y edad.
    // Los datos deben solicitarse con prompt() y deben incrustarse en
    // una plantilla de cadena de texto, luego imprimirla por consola.
}

//  Trabajamos con texto
if (ejercicio == 3) {
    // Realizar un programa que solicite ingresar texto en pantalla.
    // Con el texto ingresado, deben contar cuantos caracteres hay en dicho
    // texto (espacios incluidos), cuantos espacios hay en el texto y cuantos 
    // caracteres hay (texto - espacios) e imprimirlo por consola. 
    // Ayuda: Deben utilizar el metodo .length y corchetes []
}

// Ejercicios de práctica numérica
if (ejercicio == 4) {
    // Realice un programa que solicite el ingreso de notas de alumnos comprendidas
    // entre 0 y 100, para finalizar la carga de notas, debe ingresarse "-1".
    // Al terminar de cargar las notas, se debe entregar el promedio y la cantidad
    // de las notas ingresadas con una impresión en pantalla del mensaje. 
}

// Investigación y desarrollo.
if (ejercicio == 5) {
    // Investige en internet, qué es una función y como es su sintaxis básica,
    // coloque aquí en un comentario qué es lo que encontró.

}