// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let a=2
if (a===2) {
    console.log("Dante")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario="Dante"
let pass="Dante123"
if (usuario==="Dante" && pass==="Dante123") {
    console.log("Bienvenido")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero=0
if (numero>0) {
    console.log("Positivo")
} else if(numero<0){
    console.log("Negativo")
}else{
    console.log("CERO")
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad=15
let faltante=18
if (edad>=18) {
    console.log("Puedes votar")
} else {
    faltante-=edad
    console.log("Te faltan "+faltante+" años")    
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let valor=edad>=18?"Adulto":"Joven"
console.log(valor)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes="Junio"

switch (mes) {
    case "Enero":
            console.log("Primavera")
        break;
    case "Junio":
            console.log("Verano")
        break;
    default:
        console.log("Que mes es ese?")
        break;
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
switch (mes) {
    case "Enero":
            console.log("30")
        break;
    case "Junio":
            console.log("31")
        break;
    default:
        console.log("Que mes es ese?")
        break;
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma="Espaniol"
switch (idioma) {
    case  "Ingles":
            console.log("?")
        break;
    case "Espaniol":
            console.log("Hola")
        break;
    default:
        console.log("Que idioma es ese?")
        break;
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7