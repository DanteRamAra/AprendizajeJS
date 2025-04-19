//Strings
//typeof tipo de dato
let nombre="Dante"
let app="Ramirez"
let saludo="Holaa "+nombre //+ se puede usar para concatenar
console.log(saludo)

//longitud
console.log(saludo.length)

//acceso a caracteres
console.log(saludo[8])
//metodos comunes
console.log(saludo.toUpperCase())//mayusculas todo
console.log(saludo.toLowerCase())//minisculas
console.log(saludo.indexOf("Dante"))//donde encuentra esa cadena
console.log(saludo.includes("Da"))//verifica si se encuentra
console.log(saludo.slice(0,5))
console.log(saludo.replace("Dante","Darth"))

//template literals plantillas literales strings de varias lineas

let mensaje=`Hola con este salto
de linea canij○`
console.log(mensaje)

console.log(`Hola, ${nombre} ${app}`)