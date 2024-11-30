const saludo = "Hola Mundo!"; //retorna una string
console.log(typeof saludo);

const despedida = new String("Chao mundo :("); // retorna un objeto 
console.log(typeof despedida);

//sin embargo, tenemos disponibles métodos para el string igual que para el 
//object. Esto es porque javascript se necarga de envolver el string en un
//objeto y de retornar el valor original. Javascript nos ofrece el comportamiento
//como si estuviéramos trabajando con un objeto pero en realidad no estamos
//trabajando con ningun objeto.

saludo.concat(despedida);
despedida.concat(saludo);

//veamos algunas de sus propiedades y método más interesantes

console.log(saludo.length,"\n",
    saludo.indexOf("Mu"),"\n",
    saludo.indexOf("asd"),"\n",
    saludo.includes(" Mundo"),"\n",
    saludo.replace("Mundo", "David"),"\n", // no modifica la variable.
    saludo.toLowerCase(),"\n",
    saludo.toUpperCase(),"\n",
    saludo.substring(saludo.indexOf("H"),saludo.indexOf("M")+1),"\n",
    saludo.trim(),"\n",
    saludo.trimStart(),
    saludo.trimEnd(),
);