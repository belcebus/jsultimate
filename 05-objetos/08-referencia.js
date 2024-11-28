//RESUMEN: LOS TIPOS DE DATOS PRIMITIVOS SE COPIAN
//RESUMEN: LOS TIPOS DE DATOS DE REFERENCIA SE REFERENCIAN, POR LO QUE CADA VEZ
//          QUE SE MODIFICAN, SE MODIFICA EL OBJETO Y NO UNA COPIA.
//          ESTO APLICA A:
//              - OBJETOS
//              - ARRAYS
//              - FUNCIONES

//los tipos de datos primitivos se almacenan directamente en memoria
//de manera que cada referencia a una variable apunta al contenido

//para los tipos no primitivos, lo que se almacena en la memoria es una
//referencia a otra posicion de memoria donde comienza el objeto a guardar
//y éste puede estar almacenado entre diferentes bloques de memoria.

//cuando almacenamos varios objetos en memoria, el operador de comparación
//triple === va a comparar si las direcciones de memoria son las mismas

let a=1;
let b=a;

b++;
console.log(a, b);

// veamos si ocurre lo mismo con un objeto
let obja = {};
let objb = obja;

objb.prop = 1;

console.log(obja, objb); 


let objc = { id: 1};
let objd = objc;

objd.id++;
console.log(objc,objd);

console.log(obja==objb);
console.log(obja===objb);
console.log(objc==objd);
console.log(objc===objd);

// que pasa con las funciones?

let n = 1;

function suma(n){ //se crea una variable nueva para cada parámetro
    n++;
}

console.log(n);

//a ver que pasa con los objetos en las funciones: se modifica porque son referencias

let objn = {prop: 1};
function sumaObj(n){
    n.prop++;
}
sumaObj(objn);
console.log(objn);