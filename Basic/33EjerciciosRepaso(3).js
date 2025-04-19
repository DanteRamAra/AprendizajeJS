//Variables
//ejercicio 1 (fácil) - Declara una variable llamada nombre y asígnale tu nombre, luego imprímela.
let nombre="Dante"
console.log(nombre)
//ejercicio 2 (medio) - Crea una variable contador que inicie en 0 y luego increméntala en 1 en tres operaciones distintas.
let contador=0
let sum=2
if(sum>=2){
    contador++
    if(contador>1){
        close()
    }
}

//ejercicio 3 (difícil) - Declara una variable con let dentro de un bloque if e intenta acceder a ella fuera del bloque. Luego haz lo mismo con var y compara.
try {
    if(contador===1){
        let acceso="DANTE"
    }
    console.log(acceso)    
} catch (error) {
    console.log("Ocurrio un error",error.message)
}

if(contador===1){
    var acceso2="DANTE"
}
console.log(acceso2)
//si accede al valor en let lo da como indefinido

//Tipos de datos
//ejercicio 1 (fácil) - Determina el tipo de dato de: 42, "Hola", true, undefined.
let numero=42
let dato="Hola"
let bool=true
let indefinido
console.log(typeof numero)
console.log(typeof dato)
console.log(typeof bool)
console.log(typeof indefinido)
//ejercicio 2 (medio) - Convierte el string "123" a número y el número 456 a string.
let convertirString="123"
let convertirNumero=456
console.log(typeof convertirNumero)
console.log(typeof convertirString)
let convertidoString=convertirNumero.toString()
console.log(typeof convertidoString)
let convertidoNumber=convertirString.indexOf()
console.log(typeof convertidoNumber)

//ejercicio 3 (difícil) - Evalúa por qué [] == ![] devuelve true en JavaScript.
//porque [] representaria vacio y ![] no vacio, si algo vacio es igual a  ( lodiferente a algo no vacio)=vacio, por lo tanto vacio es igual vacio es true
//Operadores
//ejercicio 1 (fácil) - Calcula el resultado de (5 + 3) * 2 / 4.
let resultado=(5+3)*2/4
console.log(resultado)
//ejercicio 2 (medio) - Usa operadores lógicos para verificar si un número está entre 10 y 20 (incluyendo los extremos).
let numero1=19
console.log(numero1>=10 && numero1 <=20)
//ejercicio 3 (difícil) - Explica la diferencia entre == y === con ejemplos.
if(numero1=="19"){
    console.log("Es igual el valor pero no el tipo de dato")
}
if(numero1===19){
    console.log("El valor y el tipo de dato son iguales")
}
//Strings
//ejercicio 1 (fácil) - Concatena dos strings "Hola" y "Mundo" con un espacio entre ellos.
let cadena1="HOLA"
let cadena2="MUNDO"
console.log(cadena1+" "+cadena2)
//ejercicio 2 (medio) - Dado el string "JavaScript", extrae los primeros 4 caracteres y los últimos 3.
let cadena3="JAVASCRIPT"
console.log(cadena3.slice(0,4))
console.log(cadena3.slice(7,10))

//ejercicio 3 (difícil) - Invierte el string "desarrollo" sin usar métodos (solo estructuras de control).
let cadena4="DESARROLLO"
let invertida=""
for (let i = cadena4.length-1; i >=0; i--) {
    invertida+=cadena4[i]
}
console.log(invertida)
//Condicionales
//ejercicio 1 (fácil) - Escribe un condicional que imprima "Mayor de edad" si la edad es >= 18.
let numero3=15
if(numero3>=18){
    console.log("Es mayor de edad")
}else{
    console.log("NO ERES MAYOR DE EDAD")
}
//ejercicio 2 (medio) - Usa un switch para imprimir el día de la semana según un número del 1 al 7.
let dia=5
switch (dia) {
    case 1:
        console.log("LUNES")
        break;
    case 2:
        console.log("MARTES")

        break;
    case 3:
        console.log("MIERCOLES")

        break;  
    case 4:
        console.log("JUEVES")

        break;
    case 5:
        console.log("VIERNES")

        break;
    case 6:
        console.log("SABADO")

        break;
    case 7:
        console.log("DOMINGO")

        break;    

    default:
        console.log("NO ES NINGUN DIA")

        break;
}
//ejercicio 3 (difícil) - Evalúa si un año es bisiesto (usa condicionales anidados).
let numero4=2044
if((numero4%4===0 && numero4%100!=0) || numero4%400===0){
    console.log("ES UN AÑO bisiesto")
}else{
    console.log("NO ES UN AÑO bisiesto")
}
//Arrays
//ejercicio 1 (fácil) - Crea un array con 3 frutas y accede al segundo elemento.
let array=["SANDIA","PERA","FRESA"]
console.log(array[1])
//ejercicio 2 (medio) - Elimina duplicados del array [1, 2, 2, 3, 4, 4].
let array2=[1, 2, 2, 3, 4, 4]
let array3=[... new Set(array2)]
console.log(array3)
//ejercicio 3 (difícil) - Ordena un array de números en orden descendente sin usar sort.
let array4=[5,3,9,1,4,8,3]
let array5=[]

while(array4.length>0){
    let mayor=array4[0]
    let posicion=0
    for (let j = 1; j < array4.length; j++) {
        if(mayor<array4[j]){
            mayor=array4[j]
            posicion=j
        }     
         
    }
    array5.push(mayor)
    array4.splice(posicion,1)
}
console.log(array5)
//Sets
//ejercicio 1 (fácil) - Crea un Set a partir de un array con elementos duplicados y verifica su tamaño.
let set=new Set([1,1,2,3,4,1,2])
console.log(set.size)
//ejercicio 2 (medio) - Dados dos Sets, encuentra su intersección (elementos comunes).
let set2=new Set([1,2,3,4,5])
let set3=new Set([4,5,6,7,8])
let set4=new Set()
for (const element of  set2) {
    if(set3.has(element)){
        set4.add(element)
    }
}
console.log(set4)
//ejercicio 3 (difícil) - Implementa una operación de diferencia simétrica entre dos Sets.
let set5=new Set()
for (const element of  set2) {
    if(!(set3.has(element))){
        set5.add(element)
    }
}
console.log(set5)
//Maps
//ejercicio 1 (fácil) - Crea un Map que asocie nombres de países con sus capitales (3 ejemplos).
let map1=new Map([["MEXICO","CDMX"],["FRANCIA","PARIS"],["ESPAÑA","MADRID"]])
console.log(map1)
//ejercicio 2 (medio) - Itera sobre el Map anterior e imprime "La capital de X es Y".
for (let [pais,capital] of map1) {
        console.log(`La capital de ${pais} es ${capital}`)
}
//ejercicio 3 (difícil) - Convierte un objeto a Map y viceversa.
let obj={nom:"DANTE"}
let map2=new Map(Object.entries(obj))
console.log(map2)
//Bucles
//ejercicio 1 (fácil) - Imprime los números del 1 al 10 con un for.
for (let i = 1; i < 11; i++) {
    console.log(i)    
}
//ejercicio 2 (medio) - Suma todos los elementos de un array numérico usando for...of.
let array6=[5,6,3,7,8,1,2]
let suma=0
for (const element of array6) {
    suma+=element
}
console.log(suma)
//ejercicio 3 (difícil) - Imprime un patrón de triángulo con asteriscos usando bucles anidados.

for (let i = 1; i <= 4; i++) {
  let fila = "";                 
  
  for (let j = 4; j >= i; j--) {
    fila += "*";
  }
  
  console.log(fila);           
}
//Funciones
//ejercicio 1 (fácil) - Crea una función que devuelva el doble de un número recibido.
function doble(numero5){
    return numero5*2
}
console.log(doble(4))
//ejercicio 2 (medio) - Escribe una función que reciba un array y devuelva su suma (usa reduce).
function sumaF(array7) {
    return array7.reduce((acumulador, num) => {
        return acumulador + num;
    }, 0);
}
console.log(sumaF([8,9,3]))
//pedir explicacion de reduce 
/*
return array7.reduce((acumulador, num) => {
        return acumulador + num;
    }, 0);
    dame una forma mas sencilla
*/ 
//ejercicio 3 (difícil) - Crea una función recursiva para calcular el factorial de un número.
function recursiva(numero6){
    let resultado=1
    for (let i = numero6; i >0; i--) {
        resultado*=i
        
    }
    return resultado
}
console.log(recursiva(4))

//Objetos
//ejercicio 1 (fácil) - Crea un objeto persona con propiedades nombre y edad.
let persona={
    name:"DANTE",
    age:21,
    saludo:function(){
        console.log(`Hola ${persona.name}`)
    },
    trabajo:{
        name:"PROGRAMADOR",
        si:"SI"
    }

}
console.log(persona)
persona.saludo()
//ejercicio 2 (medio) - Añade un método al objeto persona que imprima un saludo con su nombre.

//ejercicio 3 (difícil) - Clona profundamente un objeto anidado (sin referencia).
//EXPLICALO
//Desestructuración y propagación
//ejercicio 1 (fácil) - Desestructura un array [1, 2, 3] en tres variables.
let array8=[1,2,3]
let Desestru=[valor1,valor2,valor3]=array8
console.log(valor1)
console.log(valor2)
console.log(valor3)


//ejercicio 2 (medio) - Combina dos arrays en uno nuevo usando el operador de propagación.
let array9=[1,6,8,1]
let array10=[...array8,...array9]
console.log(array10)
//ejercicio 3 (difícil) - Desestructura un objeto anidado (ej: { datos: { nombre: "Ana" } }).
let desObj={name:name6,age:age2,trabajo:{name:name7,si:si2}}=persona
console.log(name6)
console.log(age2)
console.log(name7)
console.log(si2)

//Clases
//ejercicio 1 (fácil) - Crea una clase Animal con propiedad nombre y método sonido().
class Animal{
    #nombre
    constructor(nombre){
        this.#nombre=nombre
    }
     get nombre() {
        return this.#nombre
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    sonido(){
        console.log("SONIDOTE")
    }
}
let animal1=new Animal("SNOOPY")
console.log(animal1)
animal1.sonido()
animal1.nombre=("PERRO")
console.log(animal1.nombre)

//ejercicio 2 (medio) - Añade un constructor a la clase Animal que reciba el nombre.
//ejercicio 3 (difícil) - Implementa un getter y setter para una propiedad privada.

//Herencia de clases
//ejercicio 1 (fácil) - Crea una clase Perro que herede de Animal y sobrescribe sonido().
class Perro extends Animal{
    constructor(nombre,raza){
        super(nombre)
        this.raza=raza
    }
    sonido(){
        console.log("GUAU")
    }
}
let perro1=new Perro("Snoopy","BEAGLE")
console.log(perro1)
console.log(perro1.raza)
perro1.sonido
//ejercicio 2 (medio) - Añade una propiedad raza a Perro usando super en el constructor.
//ejercicio 3 (difícil) - Implementa herencia múltiple usando mixins o composición.
//ni idea
//Ejercicios integradores (combinan varios temas):
//ejercicio 1 (fácil) - Crea una función que reciba un array de números y devuelva un nuevo array con los números pares multiplicados por 2.
let arreglo=[1,2,3,4,5,6,7,8,9]
function ejer1(array){
    let arreglo2=[]
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i]%2==0){
            arreglo2.push(arreglo[i]*2)
        }        
    }
    return arreglo2
}
console.log(ejer1(arreglo))
//ejercicio 2 (medio) - Implementa un sistema de gestión de libros (usando clases, arrays y métodos) que permita añadir, buscar y eliminar libros.


//ejercicio 3 (difícil) - Crea una simulación de carrito de compras con Maps (productos), métodos para calcular total, descuentos y funciones de orden superior.