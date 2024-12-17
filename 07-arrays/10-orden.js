let numeros = [15,-3,10,5];

numeros.sort(); //modifica el mismo array
console.log(numeros);
/**
 * [ -3, 10, 15, 5 ]
 */

numeros.reverse();
console.log(numeros);
/**
 * [ 5, 15, 10, -3 ]
 */

//estos métodos también funcionan si estamos usando caracteres
let letras = ['a','b','c','e','z','d'];

letras.sort();
console.log(letras);
/**
 * [ 'a', 'b', 'c', 'd', 'e', 'z' ]
 */

letras.reverse();
console.log(letras);
/**
 * [ 'z', 'e', 'd', 'c', 'b', 'a' ]
 */

//cuando los caracteres incluyen también mayúsculas, éstas tienen una representación
//en la tabla ascii con un número más bajo y por eso al ordenarlas aparecerán primero

let letrasConMay = ['Z','b','a'];
letrasConMay.sort();
console.log(letrasConMay);
/**
 * [ 'Z', 'a', 'b' ]
 */

// Se puede hacer uso de una fat arrow function para modificar el comportamiento
// de la función de ordenación

letrasConMay.sort((a,b)=>{
    /**
     * a antes b => -1
     * b antes a => 1
     * iguales   => 0
     */
    let alower = a.toLocaleLowerCase();
    let blower = b.toLocaleLowerCase();
    if(alower < blower){
        return -1;
    }else if(alower > blower){
        return 1;
    }else{
        return 0;
    }
});
console.log(letrasConMay);
/**
 * [ 'a', 'b', 'Z' ]
 */

//podemos hacer uso de este método para ordenar arrays con objetos

let usuarios = [
    {
        id: 1,
        edad: 10,
    },
    {
        id:2,
        edad: 20,
    },
    {
        id:0,
        edad:0,
    }
];

console.log(usuarios);
/**
 * [ { id: 1, edad: 10 }, { id: 2, edad: 20 }, { id: 0, edad: 0 } ]
 */

usuarios.sort((a,b)=>{
    if(a.edad < b.edad){
        return -1;
    }
    if(a.edad > b.edad){
        return 1;
    }
    return 0;
});

console.log(usuarios);
/**
 * [ { id: 0, edad: 0 }, { id: 1, edad: 10 }, { id: 2, edad: 20 } ]
 */