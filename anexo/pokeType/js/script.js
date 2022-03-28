"use strict";

// Descripcion de los tipos
const descripcion_agua = "Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición."
const descripcion_planta = "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate"
const descripcion_electrico = "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad."
const descripcion_normal = "Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc."
const descripcion_fuego = "Los Pokémon de tipo tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones."

// Apuntamos a los botones
const btnPlanta = document.querySelector("#btnPlanta");
const btnAgua = document.querySelector("#btnAgua");
const btnElectricidad = document.querySelector("#btnElectricidad");
const btnNormal = document.querySelector("#btnNormal");
const btnFuego = document.querySelector("#btnFuego");

// Apuntamos a los elementos del articulo
const article = document.querySelector("article");
const header = document.querySelector(".header");
const icon = document.querySelector(".icon-type");
const descripcion = document.querySelector("#descripcion");


// Agregamos un listener a nuestros botones
btnPlanta.addEventListener("click", function () {
  mostrarType("Planta");
});
btnAgua.addEventListener("click", function () {
    mostrarType("Agua");
});
btnElectricidad.addEventListener("click", function () {
    mostrarType("Electricidad");
});
btnNormal.addEventListener("click", function () {
    mostrarType("Normal");
});
btnFuego.addEventListener("click", function () {
    mostrarType("Fuego");
});

function mostrarType(tipo) {

    if(tipo === "Agua") {
        header.textContent = `Tipo ${tipo}`;
        descripcion.textContent = descripcion_agua;
        icon.src = "./images/water_type.png";
        article.classList.remove("agua");
        article.classList.remove("planta");
        article.classList.remove("electricidad");
        article.classList.remove("normal");
        article.classList.remove("fuego");
        article.classList.add("agua");
    }
    if(tipo === "Planta") {
        header.textContent = `Tipo ${tipo}`;
        descripcion.textContent = descripcion_planta;
        icon.src = "./images/grass_type.png";
        article.classList.remove("agua");
        article.classList.remove("planta");
        article.classList.remove("electricidad");
        article.classList.remove("normal");
        article.classList.remove("fuego");
        article.classList.add("planta");
    }
    if(tipo === "Electricidad") {
        header.textContent = `Tipo ${tipo}`;
        descripcion.textContent = descripcion_electrico;
        icon.src = "./images/electric_type.png";
        article.classList.remove("agua");
        article.classList.remove("planta");
        article.classList.remove("electricidad");
        article.classList.remove("normal");
        article.classList.remove("fuego");
        article.classList.add("electricidad");
    }
    if(tipo === "Normal") {
        header.textContent = `Tipo ${tipo}`;
        descripcion.textContent = descripcion_electrico;
        icon.src = "./images/normal_type.png";
        article.classList.remove("agua");
        article.classList.remove("planta");
        article.classList.remove("electricidad");
        article.classList.remove("normal");
        article.classList.remove("fuego");
        article.classList.add("normal");
    }
    if(tipo === "Fuego") {
        header.textContent = `Tipo ${tipo}`;
        descripcion.textContent = descripcion_electrico;
        icon.src = "./images/fire_type.png";
        article.classList.remove("agua");
        article.classList.remove("planta");
        article.classList.remove("electricidad");
        article.classList.remove("normal");
        article.classList.remove("fuego");
        article.classList.add("fuego");
    }

}
