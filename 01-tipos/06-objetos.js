let personaje = {
    nombre: "Tanjiro", //los objetos se componen de propiedades
    anime: "Demons slayer",
    edad: 16,
};
console.log(personaje);
/*
  { nombre: 'Tanjiro', anime: 'Demons slayer', edad: 16 }
   javascript no garantiza el orden de las propiedades.
*/

console.log(personaje.nombre); //acceso a un propiedad
/*
    Tanjiro
*/

console.log(personaje['edad']); //acceso a un propiedad mediante corchetes
/*
    16
*/

//modificación de una propiedad:
personaje.edad = 13; //acceso a una propiedad para modificar
personaje['edad'] = 16; //acceso a una propiedad mediante corchete para modificarla

let clave = 'edad';
personaje[clave]= 14; // acceso a propiedad mediante variable
console.log(personaje);
/*
    { nombre: 'Tanjiro', anime: 'Demons slayer', edad: 14 }
*/

//eliminar una propiedad
delete personaje.anime; //mediante acceso directo a propiedad
delete personaje["edad"]; //mediante acceso con corchetes
clave = "nombre";
delete personaje[clave]; //mediante acceso con varaible
console.log(personaje);
/*
    {}
*/