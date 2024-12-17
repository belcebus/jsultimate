const numeros = [1, 2, 3, 4];

// reduce es una método que admite dos parametros y recorre uno a uno todos los
// elementos del array.
// * Un predicado o fat arrow function
//   * variable con el valor acumulado
//   * el elemento en curso
//   * el indice
//   * el array sobre el que itera
// * El valor inicial del acumulado
// Nosotros vamos a usar solo dos parámtros del predicado y el valor inicial
// de la variable acumulada

const suma = numeros.reduce((acc,numero,indice)=>{
    console.log(`Iteracion: ${indice}`);
    console.log(`Suma acumulada: ${acc}`);
    console.log(`Sumando ${acc} + ${numero}`);
    return acc + numero;
},0);
console.log(suma);
/**
 * Iteracion: 0
 * Suma acumulada: 0
 * Sumando 0 + 1
 * Iteracion: 1
 * Suma acumulada: 1
 * Sumando 1 + 2
 * Iteracion: 2
 * Suma acumulada: 3
 * Sumando 3 + 3
 * Iteracion: 3
 * Suma acumulada: 6
 * Sumando 6 + 4
 * 10
 */

// podemos usar el reduce para aplanar un arrays anidados.

const anidado = [ [1, 2], 3, [4, 5] ];
// si trabajamos sobre este array, éste solamente tiene tres elementos.
// queremos que quede esto:
// [1, 2, 3, 4, 5]

const plano = anidado.reduce((acc, elemento, index)=>{
    console.log(`Iteración: ${index}`);
    console.log(`Accumulado: ${acc}`);
    console.log(`Acumulando ${elemento} a ${acc}`);
    return acc.concat(elemento);
},[]);

console.log(plano);
/**
 * Iteración: 0
 * Accumulado: 
 * Acumulando 1,2 a 
 * Iteración: 1
 * Accumulado: 1,2
 * Acumulando 3 a 1,2
 * Iteración: 2
 * Accumulado: 1,2,3
 * Acumulando 4,5 a 1,2,3
 * [ 1, 2, 3, 4, 5 ]
 */

// cuando tengamos un array muy grande con miles de elementos y hacer una búsqueda
// puede ser un proceso que se demore muchos minutos.
// Lo que se suele hacer en estos casos es generar un índice.

const usuarios = [
    {edad: 17, nombre: 'Nicolas'},
    {edad: 10, nombre: 'Fernando'},
    {edad: 20, nombre: 'Antonio'},
    {edad: 30, nombre: 'Jesus'},
    {edad: 40, nombre: 'Manuel'},
];

// estamos creando un nuevo objeto con los usuarios como objetos.
// {
//   Nicolas:  {edad: 17, nombre: 'Nicolas'},
//   Fernando: {edad: 10, nombre: 'Fernando'},
//   Antonio:  {edad: 20, nombre: 'Antonio'},
//   Jesus:    {edad: 30, nombre: 'Jesus'},
//   Manuel:   {edad: 40, nombre: 'Manuel'},
// }
// hemos creado un Map con los objetos, por lo que acceder a un elmeneto por su
// índice es algo instantáneo.
const indexado = usuarios.reduce((acc,elemento)=>{
    return {
        ...acc,
        [elemento.nombre]: elemento,
    };
},{});

console.log(indexado);
//   {
//     Nicolas: { edad: 17, nombre: 'Nicolas' },
//     Fernando: { edad: 10, nombre: 'Fernando' },
//     Antonio: { edad: 20, nombre: 'Antonio' },
//     Jesus: { edad: 30, nombre: 'Jesus' },
//     Manuel: { edad: 40, nombre: 'Manuel' }
//   }