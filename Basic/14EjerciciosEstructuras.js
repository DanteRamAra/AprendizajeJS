// 1. Crea un array que almacene cinco animales
let array=["Perro","GATO","LEON","CABALLO","ELEFANTE"]
console.log(array)
// 2. Añade dos más. Uno al principio y otro al final
array.push("GATIN")
array.unshift("RATON")
console.log(array)
// 3. Elimina el que se encuentra en tercera posición
array.splice(2,1)
console.log(array)
// 4. Crea un set que almacene cinco libros
let set=new Set(["SW1","SW2","SW3","SW4","SW5"])
console.log(set)
// 5. Añade dos más. Uno de ellos repetido
set.add("SW5")
set.add("SW7")
console.log(set)
// 6. Elimina uno concreto a tu elección
set.delete("SW4")
console.log(set)
// 7. Crea un mapa que asocie el número del mes a su nombre
let map=new Map([[1,"ENERO"],[2,"FEBRERO"],[3,"MARZO"],
    [4,"ABRIL"],[5,"MAYO"],[6,"JUNIO"]])
console.log(map)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(map.has(5))
// 9. Añade al mapa una clave con un array que almacene los meses de verano
map.set("verano", ["JUNIO", "JULIO", "AGOSTO"]); 
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array2=[1,2,3]
let set2=new Set(array2)
let map2=new Map([["set",set2]])
console.log(map2)