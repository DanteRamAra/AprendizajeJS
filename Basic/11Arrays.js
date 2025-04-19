//arrays estructuras de datos

let arreglo=[]//de preferencia
let arreglo2=new Array(3)//cantidad de cosas en el arreglo let arreglo2=new Array(1,5) datos llenos

arreglo=[1,5]
console.log(arreglo)

arreglo2=new Array(3)
arreglo2[0]="hola"
arreglo2[1]="hol"
arreglo2[2]="hoa"

console.log(arreglo2)


//metodos comunes

let arreglon=[]

//push introduce

arreglon.push(2)
arreglon.push("Dante")
arreglon.push("Quitar")

console.log(arreglon)
//pop quita el ultimo elemento del arreglo

console.log(arreglon.pop())
console.log(arreglon)

//shift y unshift

arreglon.shift() //elimina primer elemento del arreglo
console.log(arreglon)

arreglon.unshift("Darth")//agrega al inicio elementos
console.log(arreglon)

//length

console.log(arreglon.length)

//clear borrar 

//arreglon=[]
//arreglon.length=0//no usar tanto
console.log(arreglon)

//slice

console.log(arreglon.slice(0)) //copia superficial con un pedazo que yo quiero

//splice pasa el arreglo desde equis posicion x cantidad
let arr=[1,2,3,4]
arr.push("Comida")
console.log(arr.splice(1,4,"hola"))