//almacenar tipos de datos

//diccionario coleccion de elementos formado por un par de elementos, clave y valor
//declaracion

let map=new Map()
console.log(typeof(map))

map=new Map([["name","Dante"],["edad",21]])
console.log(map)

//metodos y propiedades

//set agregar
map.set("alias","Darth")
console.log(map)
//no se pueden repetir claves, si existe actualiza si no agrega

//get recuperar valor

console.log(map.get("name"))

//has existe o no
console.log(map.has("correo"))

//delete

console.log(map.delete("name"))
console.log(map)

console.log(map.entries())
//borrar todo
map.clear()
console.log(map)

