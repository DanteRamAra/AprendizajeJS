// 1. Crea un objeto con 3 propiedades

let carro={
    marca:"FORD",
    precio:100000,
    color:"Verde"
}

// 2. Accede y muestra su valor
console.log(carro)
// 3. Agrega una nueva propiedad
carro.llantas="Si"
console.log(carro)

// 4. Elimina una de las 3 primeras propiedades
delete carro.llantas
console.log(carro)

// 5. Agrega una función e invócala
carro.llantas=function(){
    console.log("Si tiene")
}
carro.llantas()
// 6. Itera las propiedades del objeto
for (const element in carro) {
    console.log(element+" :"+carro[element])
    
}
// 7. Crea un objeto anidado
let avion={
    marca:"FORD",
    precio:100000,
    color:"Verde",
    llantas:{
        tiene:"si",
        color:"negro"
    }

}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(avion.llantas.color)
// 9. Comprueba si los dos objetos creados son iguales


// 10. Comprueba si dos propiedades diferentes son iguales  