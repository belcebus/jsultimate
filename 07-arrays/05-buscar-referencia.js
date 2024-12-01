const usuarios = [
    {id: 1, name: 'Chanchito'},
    {id: 2, name: 'Feliz'},
];

const resultado = usuarios.indexOf({id: 1, name: 'Chanchito'});
console.log(resultado);
/**
 * -1 porque los dos objetos no son el mismo objeto ni la misma referencia.
 */

const resultado2 = usuarios.indexOf(usuarios[1]);
console.log(resultado2);
/**
 * 1 ahora sí que son el mismo objeto, pero esto no tiene sentido.
 */

//METODO find para hacer búsquedas. El criterio de igualdad es una función
//que es pasada por parámetro. Este tipo de funciones se llaman PREDICATES
//son funciones que retornan true o false.
//este método nos retornará el objeto encontrado o undefined

const resultado3 = usuarios.find(function(usuario){
    return usuario.id===2;
});
console.log(resultado3);

//podemos transformar la función anterior en una fat-arrow function
const resultado4 = usuarios.find(usuario =>
    usuario.id === 2);
console.log(resultado4);

//Si queremos retornar en lugar del objeto, el índice con la posición dentro
//del array del objeto, usaremos la función findIndexOf

const resultado5 = usuarios.findIndex(usuario => 
    usuario.id===2
);
console.log("indice: " ,resultado5);