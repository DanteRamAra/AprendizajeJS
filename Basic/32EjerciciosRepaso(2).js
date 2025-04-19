// Ejercicio 1 (Fácil - Funciones)
// Declara una función que reciba un número y muestre si es positivo, negativo o cero.
let numero=-7
function revisa(numero){
    if(numero>0){
        console.log("El numero es positivo")
    }else if(numero<0){
        console.log("El numero es negativo")
    }else{
        console.log("El numero es 0")
    }
}
revisa(numero)
// Ejercicio 2 (Medio - Funciones)
// Crea una función que reciba dos números y un operador (+, -, *, /) y devuelva el resultado de la operación.
let numero2=4
let operador="*"
function operacion(numero,numero2,operador){
    switch (operador) {
        case "+":
            console.log(numero+numero2)
            break;
        case "-":
            console.log(numero-numero2)

            break;
        
        case "/":
            console.log(numero/numero2)

            break;
        case "*":
            console.log(numero*numero2)

            break;
        default:
            console.log("Operador invalido")
            break;
    }
}
operacion(numero,numero2,operador)
// Ejercicio 3 (Difícil - Funciones)
// Crea una función que reciba un array de números y devuelva la suma de los números pares.

let array1=[1,89,6,7,3,2]
function suma(array){
    let suma=0
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2==0){
            suma+=array[i]
        }        
    }
    return suma
}
console.log(suma(array1))

// Ejercicio 1 (Fácil - Objetos)
// Crea un objeto que represente una persona con nombre, edad y ciudad. Muestra cada propiedad por separado.
let persona={
    nombre:"DANTE",
    edad:21,
    ciudad:"Mexico"
}
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.ciudad)
// Ejercicio 2 (Medio - Objetos)
// Crea un array de objetos con personas (nombre y edad) y muestra solo los mayores de edad.
let arraypersonas=[
    {nombre:"Dante",edad:21},
    {nombre:"Israel",edad:21},
    {nombre:"Danteeee",edad:17},
]
for (let i = 0; i < arraypersonas.length; i++) {
        if(arraypersonas[i].edad>=18){
            console.log(`El usuario ${arraypersonas[i].nombre} es mayor de edad con ${arraypersonas[i].edad}`)
        }    
}
// Ejercicio 3 (Difícil - Objetos)
// Crea una función que reciba un array de objetos con productos (nombre, precio, stock) y devuelva un 
// nuevo array solo con los productos disponibles (stock > 0).
let arraycosas=[
    {nombre:"AGUA",precio:216,stock:41},
    {nombre:"LECHE",precio:214,stock:0},
    {nombre:"CHEETOS",precio:211,stock:15},
]
function productos(array){
    let nuevo=[]
    for (let i = 0; i < array.length; i++) {
        
        if(array[i].stock>0){
            console.log(array[i])            
        }
    }
}
productos(arraycosas)
