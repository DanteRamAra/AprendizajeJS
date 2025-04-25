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
console.log(array5.findIndex(element=> element%2==0))
