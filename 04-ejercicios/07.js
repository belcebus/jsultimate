/**
 * crear un algoritmo que devuelva
 * el precio del producto más impuestos (21%)
 */

function precioCompleto(precio, impuesto){
    return precio + (precio*impuesto);
}

const impuesto=0.15;
let resultado=precioCompleto(19.90, impuesto);
console.log(resultado);
