//Arrays avanzados

//metodos funcionales
//funciones de orden superior, recibe otra funcion y la devuelve
//forEach

let numbers=[1,2,6,7,3]

numbers.forEach(element => console.log(element))
/*
map
crea un nuevo array
*/
let modificado=numbers.map(element =>element*2)
console.log(modificado)

//filter

let filtro=numbers.filter(element =>element%2==0)
console.log(filtro)

//reduce (devuelve number)
let result=numbers.reduce((previo,current)=>previo+current,0)
console.log(result)


//manipulacion

//flat aplanar

let nested=[1,[2,[3,[1,5]]]]
let array2=nested.flat(5)
console.log(array2)

//flatMap
let phrases=["hola mundo","adios mundo"]
let array3=phrases.flatMap(phrase => phrase.split(" "))
console.log(array3)

//ordenacion
let array4=[5,6,4,1,3,5,7]
let array5=array4.sort((a,b)=>a-b)
console.log(array5)

//reverse

console.log(array5.reverse())


//BUSQUEDA
//busca un elemento
console.log(array5.includes(2))

//find
//encuentra el primer caso que cumple la condicion
console.log(array5.find(element=> element%2==0))

//findIndex
//lo mismo que find pero da la posicion no el elemento
console.log(array5.findIndex(element=> element%2==0))//si no encuentra nada da -1 siempre retorna un numero


//Sets avanzados
//UNION
const set=new Set([1,2,3])
const set2=new Set([3,4,5,6])
const union=new Set([...set,...set2])
console.log(union)

//interseccion
const inter = new Set([...set].filter(element => set2.has(element)))

console.log(inter)
//diferencia
const diff=new Set([[...set].filter(element=>!set2.has(element))])
console.log(diff)
//set a array
console.log([...set])

//iterar
for (const element of set) {
    console.log(element)
}

set.forEach(element => console.log(element));

//MAPS AVANZADOS
const map=new Map([["name","dante"],["age",21]])

//iterar
map.forEach((value, key) =>console.log(`${key} : ${value}`));

//conversion
const arrayFromMap = Array.from(map)
console.log(arrayFromMap)

//map a obj
const obj=Object.fromEntries(map)
console.log(obj)

//obj a map

const map2=new Map(Object.entries(obj))
console.log(map2)