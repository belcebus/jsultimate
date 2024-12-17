// El método map se utiliza para crear nuevos arrays a partir de un array ya existente

const usuarios = [
    {edad: 17, nombre: 'Nicolas'},
    {edad: 10, nombre: 'Fernando'},
    {edad: 20, nombre: 'Anotnio'},
    {edad: 30, nombre: 'Jesús'},
    {edad: 40, nombre: 'Manuel'},
];

// vamos a generar un nuevo array con solamente los nombres de los usuarios
// pero los vamos a procesar para que estén envueltos con una etiqueta html

// la funcion map recibe un predicado cuyos parámetros serán el elemento sobre
// el que está iterando, el índice del elemento dentro del array y el propio array:
// const listaHTML = usuarios.map(usuarios, index, array =>{ ... });
// Pero para este ejercicio solo vamos a necesitar el usuario.
// el valor que retorne el predicado será lo que sea asignado a la nueva lista
// o array que estamos creando

const listaHTML = usuarios.map(usuario => {
    return `<li>${usuario.nombre}</li>`;
});
console.log(listaHTML);
// [
//     '<li>Nicolas</li>',
//     '<li>Fernando</li>',
//     '<li>Anotnio</li>',
//     '<li>Jesús</li>',
//     '<li>Manuel</li>'
// ]
const html = `<ol>${listaHTML.join('')}</ol>`;
console.log(html);
/**
 * <ol><li>Nicolas</li><li>Fernando</li><li>Anotnio</li><li>Jesús</li><li>Manuel</li></ol>
 */

// Vamos a crear un nuevo objeto. Será una lista en la que tendremos los
// mismos usuarios pero con un atributo nuevo que indique si es mayor de edad.

const mapped = usuarios.map(usuario =>{
    return {
        ...usuario, //recuerda que este operador expande todas las propiedades del objeto.
        mayor: usuario.edad > 17,
    };
});
console.log(mapped);
// [
//     { edad: 17, nombre: 'Nicolas', mayor: false },
//     { edad: 10, nombre: 'Fernando', mayor: false },
//     { edad: 20, nombre: 'Anotnio', mayor: true },
//     { edad: 30, nombre: 'Jesús', mayor: true },
//     { edad: 40, nombre: 'Manuel', mayor: true }
// ]

// el predicado anterior podría intentar meterse en una sola línea. El problema
// es que retornar un objeto no es posible poniendo solo las llaves porque javascript
// lo interpretará como un bloque de código:
// const mapped = usuarios.map(usuario =>
//     {...usuario, mayor: usuario.edad > 17,}
// );
// para qu funcione hay que envolverlo entre parentesis:

const mapped2 = usuarios.map(usuario => ({...usuario,mayor: usuario.edad > 17}));
console.log(mapped2);
// [
//     { edad: 17, nombre: 'Nicolas', mayor: false },
//     { edad: 10, nombre: 'Fernando', mayor: false },
//     { edad: 20, nombre: 'Anotnio', mayor: true },
//     { edad: 30, nombre: 'Jesús', mayor: true },
//     { edad: 40, nombre: 'Manuel', mayor: true }
// ]

// CONCATENACION DE METODOS: 
// Vamos a crear una nueva lista en htlm como resultado de hacer un filtro
// sobre los usuarios mayores de edad

const listaHTMLMayores = usuarios
    .filter(usuario => {
        return usuario.edad > 17;
    })
    .map(usuario => {
        return `<li>${usuario.nombre}</li>`;
    });
console.log(listaHTMLMayores);
/**
 * [ '<li>Anotnio</li>', '<li>Jesús</li>', '<li>Manuel</li>' ]
 */