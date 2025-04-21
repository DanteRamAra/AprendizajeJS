// 1. Crea una función que retorne a otra función
const funcion=function(a,b){
    console.log(a+b)
}
function suma(funcion,a,b) {
    funcion(a,b)
}
suma(funcion,3,5)
// 2. Implementa una función currificada que multiplique 3 números
function CurrySum(a){
    return function(b){
        return function(c){
            console.log(a*b*c)
        }
    }
}
const numeroAB=CurrySum(3)(5)
numeroAB(4)
// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
let resultado=0
function potencia(numero,exponente) {
    if (exponente==0) {
        return 1
    }else{

        return resultado=numero*potencia(numero,exponente-1)
    }
}
console.log(potencia(5,5))
// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(contador) {
    return  obj={
        increment(){contador
            return ++contador
        },
        decrement(){
            return --contador
        },
        getValue(){
            console.log(contador)
        }
    }
}
const counter2=createCounter(6)
console.log(counter2.increment())
console.log(counter2.decrement())
counter2.getValue()
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
let numbers=[1,5,9,6,5]
function sumManyTimes(multiplier,...numbers) {
    let resultado=0
    for (const numero of numbers) {
        resultado+=numero
    }
    return multiplier*resultado
}
console.log(sumManyTimes(3,...numbers))
// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
function Callback(data,callback) {
    let result=0
    for (const numero of data) {
        result+=numero
    }
    callback(result)
}
function CallbackF(result) {
    return console.log(result)
    
}
Callback([1,5,9,6],CallbackF)
// 7. Desarrolla una función parcial
function A(a){
    return function(b,c){
        console.log(b-a+c)
    }
}
const Sum2=A(3)
Sum2(5,9)
// 8. Implementa un ejemplo que haga uso de Spread
const array=[8,8,9,3]
function spread(a,b) {
    return a*b
}
console.log(spread(...array))
// 9. Implementa un retorno implícito
const sumaArrow=(a,d)=>a+d
console.log(sumaArrow(3,8))
// 10. Haz uso del this léxico
