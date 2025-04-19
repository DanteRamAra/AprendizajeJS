// 1. Concatena dos cadenas de texto
let saludo="Hola mi nombre es"
let nombre="Dante"
console.log(saludo+" "+nombre)
// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length)
// 3. Muestra el primer y último carácter de un string
console.log(nombre[0])
console.log(nombre[4])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
console.log(`HOLA 
    AQUI UN SALTO DE LINEA`)
// 6. Interpola el valor de una variable en un string
console.log(`Hola ${nombre}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(saludo.replaceAll(" ","_"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(saludo.includes("Hola"))
// 9. Comprueba si dos strings son iguales
console.log(saludo==nombre)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(saludo.length==nombre.length)