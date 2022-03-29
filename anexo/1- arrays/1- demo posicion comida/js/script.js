'use strict';

const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];

const inputElement = document.getElementById('index-id');

function renderizarObjetos() {
    const ul = document.getElementById('listJunkies');
    for(const junk of junkFoodILove){
        console.log(junk);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = junk;
    };

    inputElement.placeholder=`Entre 0 a ${junkFoodILove.length - 1}`
}

function buscarElemento(index) {
    console.log(`Buscar elemento en índice ${index}`);
    let result = '';
    if (Number.isNaN(index) == false) {
        result = junkFoodILove.at(index);
    }
    document.getElementById('output').innerHTML = result;
}

inputElement.addEventListener('keyup', function(e) {
    const index = e.target.valueAsNumber;
    buscarElemento(index);
});

inputElement.addEventListener('change', function(e) {
    const index = e.target.valueAsNumber;
    buscarElemento(index);
});

renderizarObjetos();

/*

Referencia:
https://github.com/atapas/js-array-at-method

*/
