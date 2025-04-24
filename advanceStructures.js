//Arrays avanzados

//metodos funcionales

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