//Estas son funciones avanzadas
const greet=function (name){
    console.log(`Hola ${name}`)
}
greet("Dante")

function processGreet(greetFunction,name){
        greetFunction(name)
}
function returnGreeting(name){
    return greet
}
processGreet(greet,"Israel")   
const greet2=returnGreeting()
greet2("PEPE")

//arrow
const fun3=(a,b)=>a+b //cuando es directo no se necesita el return
console.log(fun3(3,5))

//this lexico (?)
const manejador={
    name:"DANTE",
    greeting:function(){
        console.log(`Hola ${this.name}`)
    },
    arrowgreeting:()=>{
        console.log(`Hola ${this.name}`)
    }
}
manejador.greeting()
manejador.arrowgreeting();

//IIFE (EXPRESION DE FUNCION INVOCADA INMEDIATAMENTE)
//IIFE CLASICO
(function(){//no se llaman por nombre
    console.log("IIFE CLASICO")
})();
(()=>{
    console.log("IIFE FLECHA")
})();