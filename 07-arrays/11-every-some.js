//every and some son métodos de array para saber si algún objeto (some) cumple con
//una condición establecida o si todos (every) la cumplen. La condición es un
//predicado que se le pasa al método.

const usuarios = [
    {id:1, activo: true},
    {id:2, activo: false},
    {id:3, activo: true},
];

/**
 * some se detendrá cuando su predicado retorne un true.
 */
const algunoActivo = usuarios.some(usuario =>{
    console.log(`Procesando usuario: ${usuario.id} que está: ${usuario.activo}`);
    return usuario.activo;
});

console.log(algunoActivo);
/**
 * Procesando usuario: 1 que está: true
 * true
 */

/**
 * any se detendrá si encuentra un false
 */
const todosActivos = usuarios.every(usuario => {
    console.log(`Procesando usuario: ${usuario.id} que está: ${usuario.activo}`);
    return usuario.activo;
});

console.log(todosActivos);
/**
 * Procesando usuario: 1 que está: true
 * Procesando usuario: 2 que está: false
 * false
 */