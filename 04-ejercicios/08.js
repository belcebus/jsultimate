/**
 * crear un algoritmo que tome un array de
 * obejetos y devuelva un array de pares
 */

let array = [
    {
        id: 1,
        name: "Nicolas",
    },
    {
        id: 2,
        name: "Felipe",
    },
    {
        id: 3,
        name: "Chanchito",
    }
];

function toPares(arr){
    let newArray = [];
    let newArrayIdx=0;
    for (obj of arr ){
        newArray[newArrayIdx++]=[obj.id,obj];
    }
    return newArray;
}

let resultado = toPares(array);
console.log(resultado);