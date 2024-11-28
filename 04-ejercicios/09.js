/**
 * crear un algoritmo que devuelva un
 * array de objetos en base a pares
 */

let pairs = [
    [1,{name: "Nicolas"}],
    [2,{name: "Felipe"}],
    [3,{name: "Chanchit"}],
];

function toCollection(arr){
    let collection = [];
    let collectionIdx=0;
    for (obj of arr){
        collection[collectionIdx++] = {id: obj[0],name: obj[1].name};
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);