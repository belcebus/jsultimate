//como javascript es un lenguaje dinámico por definición, es posible que
//se quiera acceder a una propiedad de un objeto y ésta puede no existir
//o haber sido eliminada previamente.

//vamos a ver como listar las propiedades de un objeto que han podido ser
//creadas de manera dinámica.

const punto = {
    x: 10,
    y: 20,
    dibujar(){ //=== dibujar: function(){ ... }
        console.log("Dibujando punto ", this.x, ",", this.y);
    },
    borrar(){
        console.log("Borrando punto ", this.x, "," , this.y);
    },
};

delete punto.dibujar;
try {
    punto.dibujar();
}catch(Any){
    console.log(Any);
    /*
      TypeError: punto.dibujar is not a function
    */ 
}

if ('borrar' in punto){
    punto.borrar();
}

//listar las propiedades de Punto
// Object.keys(obj) --> listar propiedades
// Object.entries(obj) --> listar propiedades con valor

console.log(Object.keys(punto));
/*
    [ 'x', 'y', 'borrar' ]
*/

for ( let key of Object.keys(punto)){
    console.log(key,":", punto[key]);
}

//Object.entry
for ( let entry of Object.entries(punto) ){
    console.log("entry: ", entry);
    console.log("type of entry: ", typeof entry);
    for( let x of Object.keys(entry)){
        console.log("entry[",x,"] -> ", entry[x]);
    }
}
// iteramos sobre el array con las propiedades con un "for in"
// esta funcionalidad es relativamente nueva.
for ( let propiedad in punto ) {
    console.log(propiedad);
}