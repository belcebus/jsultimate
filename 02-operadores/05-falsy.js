// short-circuit
// devuelve en el primero false en comparaciones AND
// o devuelve el primer true en comparacione OR

//qué elementos evalúan en Falso, conocidos como Falsy
// false
// 0
// ''
// null
// undefinied
// NaN

let nombre='';
let username=nombre || 'anonimo';
console.log(username);
/*
    anonimo
*/

nombre = "Chanchito feliz";
username = nombre || 'anonimo';
console.log(username);
/*
    Chanchito feliz
*/

//nos sirve para que si tenemos una lógica que debe ejecutarse 
//solamente si una lógica anterior fue satisfactoria, por ejemplo:

function fn1(){
    console.log("funcion1");
    return true;
}
function fn2(){
    console.log("funcion2");
    return true;
}

let resultado = fn1() && fn2();
/*
    funcion1
    funcion2
 */

function fn3(){
    console.log("funcion3");
    return false;
}

let resultado2 = fn3() && fn2(); //ante el primer false, deja de evaluar
/*
    funcion3
*/

let resultado3 = fn1() || fn2() || fn3(); //ante el primer true deja de evaluar
/*
    funcion1
*/