"use strict";

/* Inove Coding School
 * Tarea! Bucles
 * Objetivos: adquirir herramientas para identificar 
 * problemas en el código, dar solución a las consignas planteadas.
 * Seleccionar cada ejercicio cambiando la variable "ejercicio"
 */

// seleccione el ejercicio a ejecutar

var ejercicio = 0;

if (ejercicio == 0) {
    ejercicio = prompt("Bienvenido, ingrese el número de ejercicio que quiere realizar");
}


// Ejercicios con bucles "while"

if (ejercicio == 1) {

    var x = 0;
    //  Dado el siguiente "while", complete la condicion
    //  para que el "while" itere siempre que "x sea menor a 6"
    //  Además, complete la línea de código necesaria para que
    //  el valor de "x" incremente "1" en cada iteración

    while ("condicion") {    // reemplace "condicion" por lo que crea necesario
        console.log("Valor de x =" + x);
        // Coloque la línea de código para que "X" incremente "1"
    }
    x = 5
    //  Dado el siguiente "while", complete la condicion
    //  para que el "while" itere siempre que "x sea mayor o igual a 0"
    //  Además, complete la línea de código necesaria para que
    //  el valor de "x" decremente "1" en cada iteración

    while ("condicion") {    // reemplace "condicion" por lo que crea necesario
        console.log("Valor de x =" + x);
        // Coloque la línea de código para que "X" decremente "1"
    }

}

// Ejercicio de sintaxis con bucles "for"
if (ejercicio == 2) {
    // Descomente cada bucle for /*...*/ y encuentre qué es lo que falta 
    // para que el bucle funcione en cada caso:
    /*for(var i=0i<10;i++){
        console.log("bien!");
    }
    */
    /*for(var i=0;i<i++){
        console.log("bien!");
    }
    */
    /*for(var i0;i<10;i++){
        console.log("bien!");
    }
    */
    /*for(var i=0;i<10;i+{
        console.log("bien!");
    }
    */
}

//  Ejercicios con bucles "for"
if (ejercicio == 3) {
    // Realice un bucle for para que imprima por consola los numeros
    // del 1 al 10 inclusive.
}

//  Ejercicios con bucles "for"
if (ejercicio == 4) {
    // Realice un programa para que solicite 5 numeros al usuario
    // y luego imprima en pantalla el promedio de estos 5 numeros.
    // Recuerde pasar los numeros recibidos a formato Number con
    // parseInt(), para realizar las operaciones matemáticas correctamente.
}

//  Ejercicios con bucles "for"
if (ejercicio == 5) {
    // Realice un programa para que solicite 5 palabras al usuario, con un
    // bucle for, luego calcule cuantos caracteres fueron ingresados en total.
}
