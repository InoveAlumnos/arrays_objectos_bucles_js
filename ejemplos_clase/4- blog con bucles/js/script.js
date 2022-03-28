"use strict";

// Apuntamos a nuestro titulo y lo guardamos en una constante
const tituloPrincipal = document.querySelector(".main-title");

// Accedemos al texto de nuestro titulo
console.log(tituloPrincipal.textContent);

// Generamos la fecha que queremos insertar
const hoy = new Date();

// Alteramos el texto de nuestro titulo con un "template string"
tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;

// ----------------------------------------------------
// Apuntamos a nuestro post y lo guardamos en una constante
const primerPost = document.querySelector(".post");

// Vemos las clases de nuestro primer post
console.log(primerPost.classList);

// Apuntamos directamente al parrafo (<p>) dentro del primer post
// querySelector retorna el primer elemento encontrado
const parrafo = document.querySelector(".post p");
console.log(parrafo.textContent)

// Apuntamos directamente al parrafo (<p>) dentro del primer post
// indicando con "[0]" que deseamos leer el primer elemento encontrado
const parrafo2 = document.querySelectorAll(".post p")[0];
console.log(parrafo2.textContent)

// Agregamos un listener a nuestro primer post
primerPost.addEventListener("click", function () {
  console.log("Primer post");
});

// ----------------------------------------------------
// Apuntamos a nuestro tercer post y lo guardamos en una constante
const tercerPost = document.getElementsByClassName("post")[2];

// Vemos los "Child Nodes" de nuestro tercer post
console.log(tercerPost.childNodes);

// ----------------------------------------------------
//Apuntamos al header de nuestro post mas visitado
const postHeader = document.getElementsByClassName("post-header")[2];

// Generamos un nuevo hijo para nuestro post mas visitado
const masVisitado = document.createElement("span");

//Le damos texto a nuestro "Child Node"
masVisitado.innerText = "Mas Visitado";

// Agregamos nuestro hijo al header de nuestro post
postHeader.appendChild(masVisitado);

/* Código legacy de la clase anterior
// ----------------------------------------------------
// Apuntamos al segundo post
const segundoPost = document.getElementsByClassName("post")[1];

// Agregamos un listener
segundoPost.addEventListener("mouseover", function () {
  // Removemos la clase de cerrado
  segundoPost.classList.remove("closed");
  // Agregamos la clase de abierto
  segundoPost.classList.add("open");
});

segundoPost.addEventListener("mouseout", function () {
  // Agregamos la clase de cerrado
  segundoPost.classList.add("closed");
  // Quitamos la clase de abierto
  segundoPost.classList.remove("open");
});
*/

/* Nueva forma de recorrer todos los posts y agregar la funcionalidad
  de mostrar/ocultar
*/

const posts = document.getElementsByClassName("post");

for (const post of posts) {
  post.classList.add("closed");

  post.addEventListener("mouseover", function () {
    // Removemos la clase de cerrado
    post.classList.remove("closed");
    // Agregamos la clase de abierto
    post.classList.add("open");
  });

  post.addEventListener("mouseout", function () {
    // Agregamos la clase de cerrado
    post.classList.add("closed");
    // Quitamos la clase de abierto
    post.classList.remove("open");
  });
}
