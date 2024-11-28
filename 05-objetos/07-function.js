//constructor Function

function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function () { console.log("Dibujando"); }
}

// método de call: permite aumentar la funcionalidad de las funciones mediante 
// la ampliación del objeto this
let punto = { z: 3 };
Punto.call(punto,1,2);
console.log(punto);
/*
    { z: 3, x: 1, y: 2, dibujar: [Function (anonymous)] }
*/

//el metodo apply hace lo mismo salvo que los argumentos deben ir en un array:
Punto.apply(punto,[1,2]);
console.log(punto);


// Olvida el siguiente fragmento, nunca crearás una funcion con este constructor
// const Point = new Function('x','y',`
//     this.x = x;
//     this.y = y;
//     this.dibujar = function () { console.log("Dibujando"); }
// `);

// const p = new Point(1,2);
// console.log(p);