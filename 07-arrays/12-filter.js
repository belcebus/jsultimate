//método para filtra arrays y así poder recuperar objetos o datos que queremos
//o también poder eliminar objetos que no necesitamos.

const usuarios = [
    {edad: 17, nombre: 'Nicolas'},
    {edad: 10, nombre: 'Fernando'},
    {edad: 20, nombre: 'Anotnio'},
    {edad: 30, nombre: 'Jesús'},
    {edad: 40, nombre: 'Manuel'},
];

//queremos recuperar todo los mayores de edad.

const mayores = usuarios.filter(usuario=>{
    console.log(`Procesando ${usuario.nombre} con edad: ${usuario.edad}`);
    return usuario.edad >= 18;
});

console.log(mayores);
// Procesando Nicolas con edad: 17
// Procesando Fernando con edad: 10
// Procesando Anotnio con edad: 20
// Procesando Jesús con edad: 30
// Procesando Manuel con edad: 40
// [
//   { edad: 20, nombre: 'Anotnio' },
//   { edad: 30, nombre: 'Jesús' },
//   { edad: 40, nombre: 'Manuel' }
// ]

//el predicado en este caso se puede colocar en una única linea:
const menores = usuarios.filter(usuario => usuario.edad < 18);
console.log(menores);
/**
 * [ { edad: 17, nombre: 'Nicolas' }, { edad: 10, nombre: 'Fernando' } ]
 */