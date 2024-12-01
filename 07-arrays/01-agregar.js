const letras = ['a','b'];

//agregar al final del array
letras.push('c','d');
console.log(typeof letras, letras);
/*
    object [ 'a', 'b', 'c', 'd' ]
*/

//agregar al comienzo
letras.unshift('y','z');
console.log(typeof letras, letras);
/*
    object [ 'y', 'z', 'a', 'b', 'c', 'd' ]
*/

//agregar un elemento despues de la letra a
letras.splice(3,0,'A');
console.log(letras);
/*
    [
        'y', 'z', 'a',
        'A', 'b', 'c',
        'd'
    ]
*/
