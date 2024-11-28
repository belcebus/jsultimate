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
