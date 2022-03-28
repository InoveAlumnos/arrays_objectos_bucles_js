"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Copiar del ejercicio anterior todos los objetos de tipo de pokemon
que ha generado.
Utilice ese objetos para crear una tarjeta de descripción de cada uno,
agregue esa información al HTML utilizando "innerHTML" como se vio
en los últimos ejemplos de clase.

*/


// Template para que utilice:
`
<article class="${pokemonTipo.estiloClase}">
<div class="header">
    ${pokemonTipo.titulo}
</div>            
<div>
    <p id="descripcion">
        ${pokemonTipo.descripcion}
    </p>
</div>
<img
  src=${pokemonTipo.icono}
  class="icon-type"
  alt="icon type"
/>
</article>
`