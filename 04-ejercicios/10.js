/**
 * Crear un array de longitud N, y que sus elementos sean
 * numeros de 1 hasta N.
 */

let longitud=7;

function crearArray(n){
    if(n<0){
        return [];
    }
    let newArray = [];
    let i=0;
    while(i<n){
        newArray[i++]=i;
    }
    return newArray;
}

let resultado=crearArray(longitud);
console.log(resultado);