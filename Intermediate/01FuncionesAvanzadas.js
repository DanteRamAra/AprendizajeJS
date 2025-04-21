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

//arrow implicito
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
//parametros rest(...)visto en tema de desestructuracion
function sum(...numbers){
    let resultado=0
    for (let number of numbers) {
        resultado+=number
    }
    return resultado
}
//... manda todo directo a un array, si no se llama bien la funcion se mete array dentro de otro
console.log(sum(1,2,3,4,5))
console.log(sum(6,7,8,9,10))

//operador spread(...) se define de la misma forma  que rest

const numbers=[1,5,5,9,7]
function sum2(a,b,c){
    return (a+b+c)
}
console.log(sum2(1,2,7))//sin spread
console.log(sum2(...numbers))//sin spread

//closures (clausuras)
function createCounter() {
    let counter=0
    return function aumentarContador() {
        counter++   
        console.log(`El valor es ${counter}`)
    }
}
const counter=createCounter()
counter()
counter()
const counter2=createCounter()
counter2()
counter2()

//funciones parciales, doble invocacion
function sumaParcial(a) {
    return function(b,c){
        return sum(a,b,c)
    }
}
const sumaW=sumaParcial(2)
console.log(sumaW(4,2))

//currying (currificacion) transformar una funcion que recibe varias cosas en una que solo reciba una a la vez
function currySum(a) {
    return function(b) {
        return function(c) {
            return function(d){
                return sum(a,b,c,d)
            }
        }
    }
}
const sumCurry=currySum(3)(7)
const sumFinal=sumCurry(3)(4)
console.log(sumFinal)

//callbacks
function process(data,callback) {
    const result=sum(...data)
    callback(result)
}
function processResult(result) {
    console.log(result)
    
}
function processResult2(result) {
    console.log(`El resultado es ${result}`)
    
}
process([1,2,2],processResult)
process([1,2,2],processResult2)
process([1,2,2],(result)=>{
    console.log(`ARROW FUNCTION ${result}`)
})