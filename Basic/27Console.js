//errores
console.error("Errorsote")
console.error("Errorsote", new Error("Conexion fallida"))

//warm advertensias

console.warn("Advertencias")
console.info("INFORMACION")

let datos=[
    ["dante",21]
]
console.table(datos)
datos=[
    {name:["dante",21]},
    {name:["ISRA",21]}
]
console.table(datos)
console.count("Tiempo")

//group

console.group("usuario:")
console.log("dante")
console.log(21)
console.groupEnd()

//time
console.time("el tiempo es")
for (let i = 0; i < 100; i++) {
}
console.timeEnd("el tiempo es")

//assert falso o no
console.assert(3>4,"es menor")
//count

console.count("Timpo2")

//trace
console.trace("se ejecuto todo esto")

//clear
console.clear("Limpio")