console.log(
    Math.PI,
    Math.abs(-15),
    Math.round(15.675, 2),
    Math.floor(15.9),
    Math.ceil(15.1),
    Math.pow(2,3),
    Math.sqrt(9),
);

console.log(Math.random());

function getRandom(min,max){
    return Math.random() * (max - min) + min;
};

console.log(Math.round(getRandom(0, 10)));