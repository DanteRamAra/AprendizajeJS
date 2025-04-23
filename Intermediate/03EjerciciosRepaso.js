// FUNDAMENTOS 
console.log("VARIABLES")
// Variables 
// 1. (Facil) Declara una variable 'nombre' y asignale tu nombre. Luego imprime su valor. 
let nombre="Dante"
console.log(nombre)
// 2. (Medio) Crea una variable 'contador' que se incremente en 1 cada vez que se ejecuta un codigo. 
let contador=0
while(contador<5){
    console.log(contador)
    contador++
}
console.log("Tipos de Datos ")

// Tipos de Datos 
// 1. (Facil) Declara variables de cada tipo primitivo en JavaScript y muestra sus tipos con typeof. 
let edad=2
let bool=true
console.log(typeof edad)
console.log(typeof nombre)
console.log(typeof bool)

// 2. (Medio) Crea un objeto que represente un libro con propiedades como titulo, autor y año. 
let libro={
    titulo:"sw1",
    autor:"Israel",
    anio:2003
}
// 3. (Dificil) Compara dos objetos con las mismas propiedades pero diferentes referencias. 
let libro2={
    titulo:"sw2",
    autor:"Isrel",
    anio:2002
}
for (const [clave,valor] in libro) {
   for (const [clave2,valor2] in libro2) {
        if (libro[clave]==libro2[clave2] &&libro[ valor]!=libro2[valor2]) {
            console.log(libro[valor])
        }
    }
}
//no salio
console.log("Operadores")

// Operadores 
// 1. (Facil) Usa operadores aritmeticos para realizar operaciones basicas con dos numeros. 
console.log(5-2)
console.log(5+2)
console.log(5*2)
console.log(5/2)
// 2. (Medio) Usa operadores logicos para combinar multiples condiciones en una sentencia if. 
let numero1=3
let numero2=0
if (numero1>2 && numero2<5) {
    console.log("hola")
}
// 3. (Dificil) Usa el operador ternario para resolver un problema de asignacion condicional. 


(numero1>6) ? console.log("se cumple"):console.log("no se cumple")
console.log("ESTRUCTURAS DE CONTROL")
// ESTRUCTURAS DE CONTROL 
// Condicionales 
// 1. (Facil) Escribe un codigo que determine si un numero es positivo, negativo o cero. 
let numero3=-5
if (numero3>0) {
    console.log("Es positivo")
}else if(numero3<0){
    console.log("Es negativo")
}else{
    console.log("Es Cero")
}
// 2. (Medio) Usa switch-case para determinar el dia de la semana basado en un numero (1-7). 
let day=4
switch (day) {
    case 1:
        console.log("Today is Monday")
        break;
    case 2:
        console.log("Today is Tuesday")
        break;
    case 3:
        console.log("Today is Wednesday")
        break;
    case 4:
        console.log("Today is Thursday")
        break;
    case 5:
        console.log("Today is Friday")
        break;
    case 6:
        console.log("Today is Saturday")
        break;
    case 7:
        console.log("Today is Sunday")
        break;
    default:
        console.log("It is not a day")
        break;
}
// 3. (Dificil) Anida condicionales para determinar si un año es bisiesto y si es del siglo XXI. 
let year=2016
if((year%4==0 && year%100!=0) || year%400==0){
    console.log(`${year} is bisiesto`)
    if(year>=2000){
        console.log("es del Siglo XXI")
    }else{
        console.log("Siglo XXI")
    }
}else{
    console.log(`${year} is not bisiesto`)
}
// Bucles 
// 1. (Facil) Usa un bucle for para imprimir los numeros del 1 al 10. 
for (let i = 1; i <=10; i++) {
    console.log(i)    
}
// 2. (Medio) Usa while para encontrar el factorial de un numero. 
let number=5
let resultado=0
let count=number-1
while (count>0) {
    number*=(count)
    count--
}
console.log(number)
// 3. (Dificil) Usa do-while para implementar un sistema de reintentos (3 intentos maximo). 
let age=14
let intentos=3
do {
    if(age<18){
        intentos--
        console.log(`Te quedan ${intentos} intentos`)
    }
} while (intentos>0);
// MANEJO DE DATOS 
console.log("MANEJO DE DATOS")
// Strings 
// 1. (Facil) Concatena dos strings y muestra el resultado. 
let string="Hello, I´m "
let string2="Dante :D"
console.log(string+string2)
// 2. (Medio) Escribe una funcion que invierta un string (ej: "hola" → "aloh"). 
let string3="hello"
let string4=""
function reverse(string4) {
    for (let i = string3.length-1; i >=0; i--) {
        string4+=string3[i]
    }
    return console.log(string4)
}
reverse(string4)
// 3. (Dificil) Crea una funcion que cuente las vocales en un string sin distinguir mayusculas/minusculas. 
let string5="Hello, my name´s Dante"
let countV=0
function vocales(string5) {
    for (let i = 0; i <string5.length; i++) {
        if(string5[i].match(/[aeiouAEIOU]/g)){
            countV++
        }
    }
    return console.log(countV)
}
vocales(string5)
// Arrays 
// 1. (Facil) Crea un array con 5 elementos y accede al tercer elemento. 
let array=[1,5,6,8,4]
console.log(array[2])
// 2. (Medio) Usa metodos de array (map, filter, reduce) para manipular datos. 
// 3. (Dificil) Implementa una funcion que aplane un array multidimensional (ej: [1,[2,[3]]] → [1,2,3]). 

// Sets 
// 1. (Facil) Crea un Set a partir de un array con elementos duplicados y muestra el resultado. 
let array2=[1,2,1,3,6,2]
let set=new Set(array2)
console.log(set)
// 2. (Medio) Implementa una funcion que devuelva la interseccion entre dos Sets. 
let set2=new Set([1,2,3,4,5])
let set3=new Set([4,5,6,7,8])
let set4=new Set()
for (const element of set2) {
    for (const element2 of set3) {
        if(element===element2){
            set4.add(element)
        }
    }
}
console.log(set4)
// 3. (Dificil) Crea una funcion que simule operaciones de conjuntos (union, diferencia, etc.). 
function Operations() {

    function interseccion(set2,set3){
        let set4=new Set([])
         for (const element of set2) {
            for (const element2 of set3) {
                if(element===element2){
                    set4.add(element)
                }
            }
        }
        console.log("La interseccion es",set4)
    }
    function union(set2,set3){
        let set4=new Set(set2)
        for (const element of set3) {
            set4.add(element)
       }
       console.log("La union es",set4)
   }
   function diferencia(set2,set3){
    let set4=new Set([])
    for (const element of set2) {
            if (!set3.has(element)) {
                set4.add(element);
            }
        }
        console.log("La diferencia es",set4)
    }
    return { interseccion, union, diferencia };

}
const op=Operations()
op.interseccion(set2,set3)
op.union(set2,set3)
op.diferencia(set2,set3)

// Maps 
// 1. (Facil) Crea un Map que asocie nombres de paises con sus capitales. 
let map=new Map([["MEXICO","CDMX"],["FRANCE","PARIS"],["ITALY","ROME"]])
console.log(map)
// 2. (Medio) Implementa una funcion que convierta un objeto a Map y viceversa. 

// 3. (Dificil) Crea un sistema de cache usando Map que expire elementos despues de un tiempo. 

// PROGRAMACION FUNCIONAL 

// Funciones (Spread/Rest) 
// 1. (Facil) Crea una funcion que acepte parametros variables usando rest y los sume. 
//que es un paramtro variable
// 2. (Medio) Usa spread para combinar dos arrays en uno nuevo. 
let arr=[1,2,3,4,5]
let arr2=[8,2,4,4,5]
let arr3=[...arr,...arr2]
console.log(arr3)
// 3. (Dificil) Implementa una funcion que clone un objeto usando spread y maneje objetos anidados. 
/*
let obj={
    name:"Dante",
    age:21
}
function clone(obj) {
    let obj1={obj}
    return obj1
}
console.log(clone(...obj))
*/
// Funciones como ciudadanos de primer nivel 
// 1. (Facil) Asigna una funcion a una variable y luego ejecutala. 
const fun=function (name) {
    console.log(`el nombre es ${name}`)
    
}
fun("DANTE")
// 2. (Medio) Pasa una funcion como argumento a otra funcion.
function pasar(functioon,name) {
    functioon(name)
} 
pasar(fun,"ISRAEL")
// 3. (Dificil) Devuelve una funcion desde otra funcion. 
function Operations2() {

    function suma(numero1,numero2){
        let resultado=numero1+numero2
        console.log(`EL RESULTADO DE LA SUMA ES ${resultado}`)
    }
    
    return { suma };

}
const op2=Operations2()
op2.suma(2,5)

// Funciones flecha 
// 1. (Facil) Convierte una funcion tradicional en arrow function. 
const arrow=(numero1,numero2)=>{console.log(numero1+numero2)}
arrow(6,8)
// 2. (Medio) Usa arrow functions con metodos de array como map o filter. 
// 3. (Dificil) Demuestra el comportamiento de 'this' en arrow functions vs funciones regulares. 

// Callbacks 
// 1. (Facil) Crea una funcion que acepte un callback y lo ejecute. 
function call(numero1,numero2,callback) {
    let result=numero1-numero2
    callback(result)
}
function main(result) {
    console.log(result)
    
}
call(63,51,main)
// 2. (Medio) Implementa un sistema de notificaciones con callbacks. 
// 3. (Dificil) Crea una funcion que maneje multiples callbacks en paralelo. 

// Closures 
// 1. (Facil) Crea un closure simple que "recuerde" un valor. 
function closure() {
    let counter=0
    return function counterAumento(){
        counter++
        console.log(counter)
    }
    
}
let val=closure()
val()
val()
val()
val()

// 2. (Medio) Implementa un contador privado usando closures. 
// 3. (Dificil) Crea una fabrica de funciones usando closures. 

// Funciones parciales/Currying 
// 1. (Facil) Crea una funcion parcial aplicando algunos argumentos por adelantado. 
function currying(a) {
    return function(b){
        console.log(a+b)
    }
}
let curr=currying(8)
curr(3)
// 2. (Medio) Implementa una funcion de suma usando currying. 
// 3. (Dificil) Crea un sistema de composicion de funciones usando currying. 

// IIFE/this lexico 
// 1. (Facil) Crea un IIFE que muestre un mensaje inmediatamente. 
// 2. (Medio) Usa IIFE para crear un modulo privado. 
// 3. (Dificil) Demuestra el concepto de 'this lexico' con arrow functions en diferentes contextos. 

// OBJETOS 

// Objetos basicos 
// 1. (Facil) Crea un objeto que represente una persona con nombre y edad. 
let person={
    name:"dante",
    age:21,
    greet:function(){
        console.log("hello")
    },
    cumple:function(){
        console.log("mi cumpleaños")
    }
}

// 2. (Medio) Agrega metodos al objeto persona para saludar y cumplir años. 
// 3. (Dificil) Implementa herencia prototipal entre objetos. 

// Desestructuracion y spread/rest 
// 1. (Facil) Usa desestructuracion para extraer propiedades de un objeto. 
// 2. (Medio) Combina dos objetos usando spread operator. 
// 3. (Dificil) Crea una funcion que acepte un objeto con propiedades opcionales usando desestructuracion. 

// PROGRAMACION ORIENTADA A OBJETOS 

// Clases 
// 1. (Facil) Crea una clase 'Animal' con propiedades nombre y sonido. 
class Animal{
    #raza
    constructor(name,raza){
        this.name=name
        this.#raza=raza

    }
    get raza(){
        return this.#raza
    }
    set(razota){
         this.#raza=razota
    }
    static sound(){
        console.log("Un sonido")
    }
}
let animal1=new Animal("Snoopy","perro")
console.log(animal1.raza)
Animal.sound()
// 2. (Medio) Agrega un metodo a la clase Animal que imprima su sonido. 
// 3. (Dificil) Implementa propiedades estaticas y privadas en la clase. 

// Herencia 
// 1. (Facil) Crea una clase 'Perro' que herede de 'Animal' y sobrescriba el metodo de sonido. 
class Mamifero extends Animal{
    constructor(name,raza,tamanio){
        super(name,raza)
        this.tamanio=tamanio
    }
}
console.time("Inicio")


class Perro extends Mamifero{
    static sound(){
        console.log("GUAU")
    }
}
let perro=new Perro("SNOOPY","CHIHUAHUA","grande")
Perro.sound()
console.log(perro)

// 2. (Medio) Implementa una jerarquia de clases (ej: Animal → Mamifero → Perro). 
// 3. (Dificil) Usa 'super' y demuestra como acceder a metodos de la clase padre. 

// OTROS CONCEPTOS IMPORTANTES 

// Manejo de Errores 
// 1. (Facil) Usa try-catch para manejar un error de division por cero. 
let divisor=0
try {
    if(divisor===0){
        throw new Error("No se puede dividir entre 0");
        
    }
} catch (error) {
    console.log("el error",error.message)
    
}
// 2. (Medio) Crea un error personalizado y lanzalo en una funcion. 
// 3. (Dificil) Implementa un sistema de reintentos con manejo de errores. 

// Uso de console 
// 1. (Facil) Usa diferentes metodos de console (log, warn, error) para mostrar mensajes. 
console.warn("advertencia")
console.log("holaa")
console.error("error")
// 2. (Medio) Mide el tiempo de ejecucion de una funcion usando console.time. 
console.timeEnd("Inicio")
// 3. (Dificil) Crea una tabla con datos complejos usando console.table. 
let array5=[1,8,9,6,4]
console.table(array5)
// Modulos 
// 1. (Facil) Crea un modulo simple que exporte una funcion y luego importala. 
// 2. (Medio) Implementa un modulo que exporte multiples funciones y objetos. 
// 3. (Dificil) Crea un sistema de modulos que use importacion dinamica. 