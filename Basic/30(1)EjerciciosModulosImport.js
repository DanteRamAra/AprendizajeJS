// 1. Exporta una función
import {mul,edad,comida,suma} from "./ejerciciosExport.js"
console.log(mul(5,1))
// 2. Exporta una constante
console.log(edad)
// 3. Exporta una clase
let comidin=new comida("ENCHILADA")
console.log(comidin.nombre)
console.log(comidin.lista())
// 4. Importa una función
console.log(suma(4,8))
// 5. Importa una constante

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
import cosa from "./ejerciciosExport.js"
let cosin=new cosa("coson")
console.log(cosin.nombre)
console.log(cosin.lista())


// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { Circulo} from "./modulos.js"
let circulo=new Circulo(5)
console.log(circulo)
console.log(circulo.area())
