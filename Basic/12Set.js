


let set=new Set()//obligatoria la sintaxis
set=new Set(["DANTE",5,"HOLA"])
console.log(set)

//add delete

set.add("ADIOS")
console.log(set)

set.delete(5)//no elimina el ultimo se debe indicar
console.log(set)

//has comprobar si existe elemento
console.log(set.has("Dante"))


//size==lenght
console.log(set.size)


//set a array

let arreglo=Array.from(set)
console.log(arreglo)

let set2=new Set(arreglo)
console.log(set2)

//no se pueden añadir los mismos elementos 2 veces, no aparece  