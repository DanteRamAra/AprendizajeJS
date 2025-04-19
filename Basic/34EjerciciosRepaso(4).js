//Hola Mundo
// ► Fácil: Imprime "Hola Mundo" en la consola
console.log("Hola mundo")
// ► Medio: Crea una función que reciba un nombre y muestre "Hola, [nombre]"

function Nombre(nombre){
    console.log(`Hola ${nombre}`)
}
Nombre("Dante")
// ► Difícil: Crea un programa que muestre "Hola Mundo" en 3 idiomas diferentes usando una función
function Idioma(idioma){
    switch (idioma) {
        case "espaniol":
            console.log("HOLA MUNDO")
            break;
        case "ingles":
                console.log("Hello World")
            break;    
        case "ruso":
                console.log("Привет, мир")
            break;
        default:
            console.log("Ese no es un idioma")
            break;
    }
}
Idioma("espaniol")
Idioma("ingles")
Idioma("ruso")

console.log("Variables")
//Variables
// ► Fácil: Declara una variable con tu nombre y muéstrala
let nombre2="Dante"
console.log(nombre2)

// ► Medio: Crea variables para nombre, edad y ciudad y muéstralas juntas
let nombre3="ISRAEL"
let edad=21
let ciudad="EDO MEX"
console.log(`${nombre3} tiene ${edad} y habita en ${ciudad}`)
// ► Difícil: Intercambia los valores de dos variables sin usar una temporal
let nombre4="Dante"
let nombre5="Israel"
//nota se puede usar destructuracion de otras formas
let [nombre6,nombre7]=[nombre5,nombre4]
console.log(nombre6)
console.log(nombre7)

console.log("Tipos de datos")
//Tipos de datos
// ► Fácil: Identifica y muestra el tipo de dato de 3 valores diferentes
let numero=3
let nombre8="Pepe"
let bool=true
console.log(typeof numero)
console.log(typeof nombre8)
console.log(typeof bool)

// ► Medio: Convierte un string a número y un número a string

console.log(typeof parseInt("74"))
console.log(typeof toString("31"))
// ► Difícil: Comprueba si un valor es array, objeto o primitivo
//PEDIR EXPLICACION
console.log("OPERADORES")
//Operadores
// ► Fácil: Realiza las 4 operaciones básicas con 2 números
let numeroa=2
let numerob=4
function op(numeroa,numerob){
    console.log(numeroa+numerob)
    console.log(numeroa-numerob)
    console.log(numeroa*numerob)
    console.log(numeroa/numerob)
}
op(numeroa,numerob)
// ► Medio: Evalúa si un número es par y positivo al mismo tiempo
console.log(numeroa%2==0 && numeroa>0)
// ► Difícil: Crea una expresión que combine operadores lógicos y aritméticos
let suma1=true
suma1 ? console.log(`Salio exitoso : ${(((numeroa+numerob)>5) && ((numeroa-numerob)>-10))}`): console.log("sin exito")
console.log("STRINGS")
//Strings
// ► Fácil: Concatena dos strings y muestra el resultado
let string1="Hola"
let string2="mundo"
console.log(string1+" "+string2)
// ► Medio: Invierte un string sin usar métodos de array
let string3="Hola mundo"
console.log(string3.length)
let string4=""
for (let i = string3.length-1; i>=0; i--) {
    string4+=string3[i]
}
console.log(string4)
// ► Difícil: Cuenta las vocales de un string sin considerar mayúsculas/minúsculas
let contador=0
for (let i =0; i<string4.length; i++) {
    if(string4[i].match(/[aeiouAEIOU]/g)){
        contador++
     }
}
console.log(`numero total de vocales ${contador}`)
console.log("CONDICIONALES")
//Condicionales
// ► Fácil: Verifica si un número es mayor que 10
let numero7=4
if(numero7>10){
    console.log("SE CUMPLE")
}else{
    console.log("NO SE CUMPLE")
}
// ► Medio: Clasifica una nota en A, B, C, D o F
let nota=9
switch (nota) {
    case 10:
        console.log("TIENES A")
        break;
    case 9:
        console.log("TIENES B")
        break;
    case 8:
        console.log("TIENES C")
        break;
    case 7:
        console.log("TIENES D")
        break;
    case 6:
        console.log("TIENES F")
        break;
    default:
        break;
}
// ► Difícil: Crea un sistema de login básico con usuario y contraseña
let usuario="DANTE"
let pass="123a"
function login(usuario,pass){
    if(usuario==="Dante" && pass==="123a"){
        console.log(`BIENVENIDO ${usuario}`)
    }else{
        console.warn("datos incorrectos")
    }
}
login(usuario,pass)
console.log("ARRAYS")
//Arrays
// ► Fácil: Crea un array con 3 elementos y muestra el segundo
let array=[1,2,3]
console.log(array[1])
// ► Medio: Filtra los números pares de un array
let array2=[1,2,3,5,6,7,8,21,3]
let array3=[]

for (let i = 0; i < array2.length; i++) {
        if(array2[i]%2==0){
            array3.push(array2[i])
        }    
}
console.log(array3)
// ► Difícil: Elimina duplicados de un array sin usar Set
let array4=[5,6,1,5,9,1,3,1,5,3]
let array5=[]
for (let i = 0; i < array4.length; i++) {
    let nounico=false
    for (let j = 0; j < array5.length; j++) {
        if(array4[i]===array5[j]){
            nounico=true
            break;
        }        
    }
    if(!nounico){
        array5.push(array4[i])
    }
}
console.log(array5)
console.log("SETS")
//Sets
// ► Fácil: Crea un Set con 3 valores y muestra su tamaño
let set=new Set([1,32,36,8,1])
console.log(set.size)
// ► Medio: Convierte un array a Set y viceversa
let arraySet=[3,1,3]
let set2=new Set(arraySet)
console.log(set2)
console.log(set2.size)
let setArray=Array.from(set2)
console.log(setArray)
console.log(setArray.length)
// ► Difícil: Implementa operaciones de unión e intersección entre Sets
let set3=new Set([1,2,3,4,5,6])
let set4=new Set([4,5,6,7,8,9])
let set5=new Set([...set3,...set4])
console.log(set5)
let arrayUnion1=Array.from(set3)
let arrayUnion2=Array.from(set4)
let set6=new Set([])
for (let i = 0; i < arrayUnion1.length; i++) {
    for (let j = 0; j < arrayUnion2.length; j++) {
            if(arrayUnion1[i]==arrayUnion2[j]){
                set6.add(arrayUnion1[i])
            }        
    }
}
console.log(set6)
console.log("MAPS")
//Maps
// ► Fácil: Crea un Map con 3 pares clave-valor y muestra uno
let map=new Map([["name","dante"],["edad",21],["comida","Enchildas"]])
console.log(map.get("name"))
console.log(map.get("comida"))
console.log(map.get("edad"))

// ► Medio: Itera sobre un Map y muestra todas sus entradas
for (const [claves,dato] of map) {
    console.log(`la clave es ${claves} y su valor es ${dato}`)
    
}
// ► Difícil: Convierte un objeto a Map y viceversa
/*
let objeto={
    name:"DANTE",
    edad:22,
    comida:"pozole"
}
let map3=new Map([])
for (const [element,valor] of objecto) {
    map3.set(element,valor)
}
console.log(map3)
no salio
*/ 
console.log("BUCLES")
//Bucles
// ► Fácil: Muestra los números del 1 al 5 con un bucle
for (let i = 1; i <6; i++) {
    console.log(i)
}
// ► Medio: Suma todos los elementos de un array numérico
let arrsum=[1,5,9,2,323,4,0]
let acumulado=0
for (let i = 0; i < arrsum.length; i++) {
    acumulado+=arrsum[i]
}
console.log(`La suma es igual a ${acumulado}`)
// ► Difícil: Crea un patrón piramidal con asteriscos usando bucles
for (let i = 0; i < 8; i++) {
    let patron=" "

        for (let j = 0; j <i+1; j++) {
            patron+="* "           
        } 
        console.log(patron)   
}
console.log("FUNCIONES")
//Funciones
// ► Fácil: Crea una función que devuelva el doble de un número

function doble(numero7) {
    return numero7*2
}
console.log(doble(4))
// ► Medio: Implementa una función factorial recursiva
console.time("INICIO")
function recursiva(numero8) {
    if(numero8==0 || numero8==1){
        return 1
    
    }else{
        return numero8*recursiva(numero8-1)
    }
}
console.log(recursiva(4))
// ► Difícil: Crea una función memoizada para cálculos pesados
//ni idea ni se a que se refiere 
console.log("OBJETOS")
//Objetos
// ► Fácil: Crea un objeto persona con nombre y edad
let objeto={
    name:"dantEe",
    edad:21,
    saludo:function(){
        console.log(objeto.name)
        console.log(objeto.edad)
    }
}
objeto.saludo()

// ► Medio: Agrega un método al objeto que muestre sus datos
//hecho en el ejercicio anterior
// ► Difícil: Crea una función que clone profundamente un objeto
//ni idea
//Desestructuración y propagación
// ► Fácil: Desestructura un array en 3 variables
let array8=[1,2,3]
let deses=[valor1,valor2,valor3]=array8
console.log(valor1)
console.log(valor2)
console.log(valor3)

// ► Medio: Combina dos arrays usando el operador spread
let array9=[8,9,4,3]
let combina=[...array8,...array9]
console.log(combina)
// ► Difícil: Desestructura un objeto anidado
let comida={
    nombre:"POZOLE",
    cantidad:3,
    ingredientes:{
        nombre:"CHILE"
    }
}
let {nombre:valor4,ingredientes:{nombre:valor5}}=comida
console.log(valor4)
console.log(valor5)
console.log("HERENCIA")
//Clases y Herencia
// ► Fácil: Crea una clase Animal con método hacerSonido
class Animal{
    constructor(name){
        this.name=name
    }
    hacerSonido(){
        console.log("sonidote")
    }
}
let perro=new Animal("SNOOPY")
console.log(perro)
perro.hacerSonido()
// ► Medio: Extiende la clase Animal para crear Perro
class Perro extends Animal{
    constructor(name,raza){
        super(name)
        this.raza=raza
    }
}
let perro2=new Perro("dante","Chihuahua")
console.log(perro2.raza)
// ► Difícil: Implementa herencia múltiple usando mixins
//ni idea
console.log("CONSOLE")
//Console
// ► Fácil: Usa console.log, warn y error con mensajes diferentes
console.log("HOLAA")
console.warn("ADVERTENCIA")
console.error("ERROR")
// ► Medio: Mide el tiempo de ejecución de una función
console.timeEnd("INICIO")
//HECHO A LO LARGO DEL CODIGO
// ► Difícil: Crea una tabla a partir de un array de objetos
let obj1={
    name:"dante"
}
let obj2={
    name:"DARTH",
    saludo:"HOla"
}
let arrayOBJ=[obj1,obj2]
console.table(arrayOBJ)

console.log("INTEGRADORES")
console.log("EJ 1")
//Ejercicios Integradores
// 1. Crea un sistema de gestión de libros (CRUD) usando clases


// 2. Implementa un carrito de compras con funciones para agregar, quitar y calcular total
// 3. Desarrolla un juego de Piedra, Papel o Tijera contra la computadora con interfaz de consola