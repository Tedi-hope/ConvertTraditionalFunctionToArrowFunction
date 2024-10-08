//convert the following traditional functions to Arrow functions

/*function add(a,b){
    returna+b;
}

function multiply(a,b){
    return a*b;
}

function greet(name){
    return 'Hello '+name;
}*/


let a=4,b=5;
let name="Tedyo";

const add=(a,b)=>a+b; // first function

const mult=(a,b)=> a*b; //second function

greet=(name)=> console.log(`Hello ${name}`);


//Test code
let added=add(a,b);
console.log(added);

let mul=mult(a,b);
console.log(mul);

greet(name);

