// Ejercicio 1 (Fácil - Strings)
// Declara una cadena de texto y muestra cuántos caracteres tiene.
let string="El madrid remonta"
console.log(string.length)
// Ejercicio 2 (Medio - Strings)
// Declara una cadena y muestra esa misma cadena pero toda en mayúsculas, sin usar funciones propias.
console.log(string.toUpperCase())
// Ejercicio 3 (Difícil - Strings)
// Declara dos cadenas y muestra si son iguales letra por letra (sin usar "===" directamente).
let string2="El madrid no remonta"
for (let i = 0; i < string.length; i++) {
    if(string[i]!=string2[i]){
        console.log(`No son iguales desde ${string[i]} desde el indice ${i}`)
        break
    }
}

// Ejercicio 1 (Fácil - Condicionales)
// Declara una variable con una edad y muestra "Mayor de edad" si es mayor o igual a 18, si no "Menor de edad".
let edad=54
if (edad>=18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}
// Ejercicio 2 (Medio - Condicionales)
// Declara tres variables numéricas y muestra cuál es el mayor usando solo condicionales.
let edad2=13
let edad3=55
if (edad>edad2 && edad>edad3) {
    console.log(`El mayor es el de edad ${edad}`)
} else if(edad2>edad && edad2>edad3) {
    console.log(`El mayor es el de edad ${edad2}`)

}else{
    console.log(`El mayor es el de edad ${edad3}`)

}
// Ejercicio 3 (Difícil - Condicionales)
// Declara una variable con un año y determina si es bisiesto (divisible entre 4 pero no entre 100, salvo que también sea divisible entre 400).
let anio=2002
if((anio%4===0 || anio%400===0) && anio%100!==0  ){
    console.log("Es un año bisiesto")
}else{
    console.log("No es bisiesto")
}

// Ejercicio 1 (Fácil - Arrays)
// Crea un array con 5 nombres y muestra el primero y el último.
let nombres=["DANTE","JUAN","PEDRO","LUKE","JOSE"]
console.log(nombres[0])
console.log(nombres[4])
// Ejercicio 2 (Medio - Arrays)
// Declara un array de números y recorrelo para mostrar solo los mayores a 10.
let numeros=[1,58,9,59,3,45,25,6,7,48]
for (let i= 0; i< numeros.length; i++) {
    if(numeros[i]>10){
        console.log(`Hola numero ${numeros[i]}`)
    }    
}
// Ejercicio 3 (Difícil - Arrays)
// Crea dos arrays y muestra los elementos que están en ambos (intersección) usando solo bucles y condicionales.
let array1=[1,2,3,4,5]
let array2=[4,5,2,8,7,1]
for (let i= 0; i< array1.length; i++) {
   for (let j = 0; j < array2.length; j++) {
        if(array1[i]===array2[j]){
            console.log(`El numero en comun es ${array1[i]}`)
        }
   }
}
// Ejercicio 1 (Fácil - Sets)
// Crea un Set con 4 colores y muestra su tamaño.
let set=new Set(["ROJO","VERDE","AZUL","NEGRO"])
console.log(set.size)
// Ejercicio 2 (Medio - Sets)
// Dado un array con nombres repetidos, usa un Set para eliminar duplicados y muestra los elementos únicos.
let set2=new Set(["ROJO","ROJO","AZUL","NEGRO"])
console.log(set2)
//set no permite duplicados, por lo tanto en la impresion solo saldran 3 rojo,azul y negro, ademas ese sera el tamaño que contara

// Ejercicio 3 (Difícil - Sets)
// Crea dos arrays con algunos valores repetidos. Usa Sets para mostrar la unión de ambos (sin duplicados).
let set3=new Set()
console.log(set3)
for (let i= 0; i< array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
         if(array1[i]===array2[j]){
            set3.add(array1[i])

         }
    }
}
console.log(set3)

// Ejercicio 1 (Fácil - Maps)
// Crea un Map con tres marcas de autos y su país de origen. Muestra el país de una marca.
let map=new Map([["Ford","EUA"],["TOYORA","JAPON"],["BMW","ALEMANIA"]])
console.log(map.get("BMW"))
// Ejercicio 2 (Medio - Maps)
// Crea un Map con productos y precios. Recorre el Map y muestra solo los productos con precio mayor a 100.
let map2=new Map([["Ford","100"],["TOYORA","98"],["BMW","101"]])
for (const [marca,precio] of map2) {
    if(precio>100){
        console.log(`La marca ${marca} tiene un precio mayor a 100`)
    }
}
// Ejercicio 3 (Difícil - Maps)
// Crea un Map con nombres y arrays de calificaciones. Calcula el promedio de cada persona y muestra los que tengan promedio mayor o igual a 8.
let map3=new Map([["DANTE",[7,3,5]],["ISRAEL",[7,8,4]],["PEPE",[8,8,9]]])
for (const [persona,calificaciones] of map3) {
    let suma=0
    let promedio=0

    for (let i = 0; i < calificaciones.length; i++) {
        promedio+=calificaciones[i]
    }
     suma=promedio/calificaciones.length
    if(suma>=8){
        console.log(`El alumno con promedio mayor o igual a 8 es  ${persona} ${suma}` )
    }
}

// Ejercicio 1 (Fácil - Bucles)
// Usa un bucle for para mostrar los números del 1 al 5 en la consola.
for (let index = 1; index <6; index++) {

    console.log(index)
}
// Ejercicio 2 (Medio - Bucles)
// Declara un array con números y usa un bucle para contar cuántos son pares.
let contador=0
for (let index = 0; index < numeros.length; index++) {
    if(numeros[index]%2==0){
        contador++
    }   
}
console.log(`El numero total de pares es ${contador}`)
// Ejercicio 3 (Difícil - Bucles)
// Declara una matriz (array de arrays) y usa bucles anidados para sumar todos los números.
let matrix=[[1,4,5,3],[4,2,4,1]]
let suma=0
for (let index = 0; index < matrix.length; index++) {
    for (let j = 0; j < matrix.length; j++) {
        suma+=matrix[index][j]
    }   

}
console.log(suma)