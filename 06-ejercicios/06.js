//crear copias de objetos sin usar ... ni Object.assign

let obj1 = { id: 1, name: 'Chanchito'};

function crearCopia(obj){
    let newObj = {};
    for (let prop in obj){
        newObj[prop]=obj[prop];
    }
    return newObj;
}

let obj2 = crearCopia(obj1);
console.log(obj1,obj2)