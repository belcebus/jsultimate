let punto = {
    x: 10,
    y: 15,
};

//clonar este objeto punto a otro objeto

// primero vemos la función de clase assign:
// se asignan las propiedades al objecto de la izquierda
// las propiedades del objecto de la derecha.

Object.assign(punto, { z: 10, });
console.log(punto);
/*
    { x: 10, y: 15, z: 10 }
*/

// para clonar un objeto mediante el uso de la funcion de clase assign
// se asignan las propiedades de objeto de la derecha a un objeto vacio.

let clonePunto = Object.assign({},punto);
console.log(clonePunto);
/*
    { x: 10, y: 15, z: 10 }
*/

// se puede usar esta función de clase para clonar y añadir al mismo tiempo

let clonePunto2 = Object.assign({},punto,{j: 20, x:30});
console.log(clonePunto2);
/*
    { x: 30, y: 15, z: 10, j: 20 }
*/

//OTRA FORMA MAS MODERNA: spread operator u operador de propagación
// Spread Operator (...):
// Expande los elementos de un array o las propiedades de un objeto.
// Se usa principalmente cuando quieres "desempaquetar" los elementos de
// una colección.

let copia3 = { ...punto}; //===Object.assign({},punto);
//por partes:
// se crea un objeto literal {}
// y despues las propiedades de punto se asignan con el operador ...
// al objeto literal que hemos creado

console.log(copia3);
/*
    { x: 10, y: 15, z: 10 }
*/
