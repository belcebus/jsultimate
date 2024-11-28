// en JS los objetos son dinámicos. Esto quiere decir que puedes añadirles
// o quitarles propiedades o funciones en cualquier momento.

const user = { id: 1};
//hemos declarado esto como una constante y no podemos cambiar su valor con por
//ejemplo:
//user = 1;
// Pero lo que si podemos hacer es agregar o quitar propiedades

user.name = "David";
user.guardar = function () {
    console.log('Guardando',user.name);
};
user.print= function () {
    console.log(user.id,user.name);
};

user.guardar();
/*
    Guardando David
*/
user.print();
/*
    1 David
*/
delete user.id;
user.print();
/*
    undefinied David
*/

//Podemos hacer que un objeto no sea modificable haciendo uso del método
//freeze de la clase Object:

const user1 = Object.freeze({id:1});
console.log(user1);
/*
    { id: 1 }
 */
user1.nombre="David";
delete user1.id;
user1.id=2;
console.log(user1);
/*
    { id: 1 }
 */

// Podemos hacer que el objeto sea modificable en sus valores de las propiedades
// ya creadas pero no añadir nuevas propiedades: seal

const user2 = Object.seal({id: 1});
console.log(user2);
/*
    { id: 1 }
 */
user2.nombre="David";
user2.id=2;
console.log(user2);
/*
    { id: 2 }
 */