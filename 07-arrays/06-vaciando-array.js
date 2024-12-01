//1.- asignar a un array vacio, pero no elimina todas las referencias.

let arr1 = [1,2];
let arr2 = arr1;
arr1=[];
console.log("arr1:", arr1, "arr2:", arr2);
/**
 * arr1: [] arr2: [ 1, 2 ]
 */

//2.- asignarle una longitud de cero.

let arr3 = [1,2];
arr3.length=0;
console.log("arr3:",arr3);
/**
 * arr3: []
 */

//3.- con el metodo splice desde el primer al ultimo elemento
let arr4 = [1,2];
arr4.splice(0,arr4.length);
console.log("arr4:" , arr4);
/**
 * arr4: []
 */

//4.- mediante un loop, NO ES RECOMENDADO POR MOTIVOS OBVIOS.
let arr5 = [1,2];
while(arr5.length>0){
    arr5.pop();
}
console.log("arr5:", arr5);
/**
 * arr5: []
 */