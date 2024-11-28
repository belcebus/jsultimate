let personas = []; //array literal vacío
let animales = ["cerdo", "caballo"]; //array inicializado con valores

console.log(animales);
/*
    [ 'cerdo', 'caballo' ]
*/

//acceso a los elementos de un array
console.log(animales[0]);
/*
    cerdo
*/

//añadir elementos al array
animales[2] = "dragon";
console.log(animales);
/*
    [ 'cerdo', 'caballo', 'dragon' ]
*/

animales[5]='canario'; //podemos añadir elementos al array en cualquier lugar
console.log(animales);
/*
    [ 'cerdo', 'caballo', 'dragon', <2 empty items>, 'canario' ]
*/
console.log(animales[3]); //accedemos a un elemento del array que no existe
/*
    undefined
*/
console.log(animales.length); // los elementos vacíos también cuentan como elementos
/*
    6
*/

console.log(typeof animales); // un array se identifica como un objeto, por lo
                              // que podemos acceder a sus propiedades