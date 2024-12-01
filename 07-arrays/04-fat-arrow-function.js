// function hola(){
//     return 'Hola mundo';
// }

// const hola = () => {    //las fat arrow siempre son anónimas.
//     return 'Hola mundo'; // tienen el return implícito y no necesitan llaves.
// }

const hola = () =>'Hola mundo'; // tienen el return implícito. así que podemos
                                // pero solamente si el cuerpo de la función
                                // puede ser contenido en una única linea.

console.log(hola());

//paso de parámetro por parámetro.

const saludo = (nombre) => `Hola ${nombre}`;
console.log(saludo("Nicolas"));

// si la fatarrow function solo recibe un parámetro, los parentesis pueden ser omitidos
const saludo2 = nombre => `Hola ${nombre}`;
console.log(saludo2('Toni'));
