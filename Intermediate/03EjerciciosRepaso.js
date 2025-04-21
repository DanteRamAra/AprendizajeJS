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
// 2. (Medio) Usa switch-case para determinar el dia de la semana basado en un numero (1-7). 
// 3. (Dificil) Anida condicionales para determinar si un año es bisiesto y si es del siglo XXI. 

// Bucles 
// 1. (Facil) Usa un bucle for para imprimir los numeros del 1 al 10. 
// 2. (Medio) Usa while para encontrar el factorial de un numero. 
// 3. (Dificil) Usa do-while para implementar un sistema de reintentos (3 intentos maximo). 

// MANEJO DE DATOS 

// Strings 
// 1. (Facil) Concatena dos strings y muestra el resultado. 
// 2. (Medio) Escribe una funcion que invierta un string (ej: "hola" → "aloh"). 
// 3. (Dificil) Crea una funcion que cuente las vocales en un string sin distinguir mayusculas/minusculas. 

// Arrays 
// 1. (Facil) Crea un array con 5 elementos y accede al tercer elemento. 
// 2. (Medio) Usa metodos de array (map, filter, reduce) para manipular datos. 
// 3. (Dificil) Implementa una funcion que aplane un array multidimensional (ej: [1,[2,[3]]] → [1,2,3]). 

// Sets 
// 1. (Facil) Crea un Set a partir de un array con elementos duplicados y muestra el resultado. 
// 2. (Medio) Implementa una funcion que devuelva la interseccion entre dos Sets. 
// 3. (Dificil) Crea una funcion que simule operaciones de conjuntos (union, diferencia, etc.). 

// Maps 
// 1. (Facil) Crea un Map que asocie nombres de paises con sus capitales. 
// 2. (Medio) Implementa una funcion que convierta un objeto a Map y viceversa. 
// 3. (Dificil) Crea un sistema de cache usando Map que expire elementos despues de un tiempo. 

// PROGRAMACION FUNCIONAL 

// Funciones (Spread/Rest) 
// 1. (Facil) Crea una funcion que acepte parametros variables usando rest y los sume. 
// 2. (Medio) Usa spread para combinar dos arrays en uno nuevo. 
// 3. (Dificil) Implementa una funcion que clone un objeto usando spread y maneje objetos anidados. 

// Funciones como ciudadanos de primer nivel 
// 1. (Facil) Asigna una funcion a una variable y luego ejecutala. 
// 2. (Medio) Pasa una funcion como argumento a otra funcion. 
// 3. (Dificil) Devuelve una funcion desde otra funcion. 

// Funciones flecha 
// 1. (Facil) Convierte una funcion tradicional en arrow function. 
// 2. (Medio) Usa arrow functions con metodos de array como map o filter. 
// 3. (Dificil) Demuestra el comportamiento de 'this' en arrow functions vs funciones regulares. 

// Callbacks 
// 1. (Facil) Crea una funcion que acepte un callback y lo ejecute. 
// 2. (Medio) Implementa un sistema de notificaciones con callbacks. 
// 3. (Dificil) Crea una funcion que maneje multiples callbacks en paralelo. 

// Closures 
// 1. (Facil) Crea un closure simple que "recuerde" un valor. 
// 2. (Medio) Implementa un contador privado usando closures. 
// 3. (Dificil) Crea una fabrica de funciones usando closures. 

// Funciones parciales/Currying 
// 1. (Facil) Crea una funcion parcial aplicando algunos argumentos por adelantado. 
// 2. (Medio) Implementa una funcion de suma usando currying. 
// 3. (Dificil) Crea un sistema de composicion de funciones usando currying. 

// IIFE/this lexico 
// 1. (Facil) Crea un IIFE que muestre un mensaje inmediatamente. 
// 2. (Medio) Usa IIFE para crear un modulo privado. 
// 3. (Dificil) Demuestra el concepto de 'this lexico' con arrow functions en diferentes contextos. 

// OBJETOS 

// Objetos basicos 
// 1. (Facil) Crea un objeto que represente una persona con nombre y edad. 
// 2. (Medio) Agrega metodos al objeto persona para saludar y cumplir años. 
// 3. (Dificil) Implementa herencia prototipal entre objetos. 

// Desestructuracion y spread/rest 
// 1. (Facil) Usa desestructuracion para extraer propiedades de un objeto. 
// 2. (Medio) Combina dos objetos usando spread operator. 
// 3. (Dificil) Crea una funcion que acepte un objeto con propiedades opcionales usando desestructuracion. 

// PROGRAMACION ORIENTADA A OBJETOS 

// Clases 
// 1. (Facil) Crea una clase 'Animal' con propiedades nombre y sonido. 
// 2. (Medio) Agrega un metodo a la clase Animal que imprima su sonido. 
// 3. (Dificil) Implementa propiedades estaticas y privadas en la clase. 

// Herencia 
// 1. (Facil) Crea una clase 'Perro' que herede de 'Animal' y sobrescriba el metodo de sonido. 
// 2. (Medio) Implementa una jerarquia de clases (ej: Animal → Mamifero → Perro). 
// 3. (Dificil) Usa 'super' y demuestra como acceder a metodos de la clase padre. 

// OTROS CONCEPTOS IMPORTANTES 

// Manejo de Errores 
// 1. (Facil) Usa try-catch para manejar un error de division por cero. 
// 2. (Medio) Crea un error personalizado y lanzalo en una funcion. 
// 3. (Dificil) Implementa un sistema de reintentos con manejo de errores. 

// Uso de console 
// 1. (Facil) Usa diferentes metodos de console (log, warn, error) para mostrar mensajes. 
// 2. (Medio) Mide el tiempo de ejecucion de una funcion usando console.time. 
// 3. (Dificil) Crea una tabla con datos complejos usando console.table. 

// Modulos 
// 1. (Facil) Crea un modulo simple que exporte una funcion y luego importala. 
// 2. (Medio) Implementa un modulo que exporte multiples funciones y objetos. 
// 3. (Dificil) Crea un sistema de modulos que use importacion dinamica. 