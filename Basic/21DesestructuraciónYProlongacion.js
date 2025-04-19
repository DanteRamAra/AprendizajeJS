


let arreglo=[1,5]
let persona={
    name:"Dante",
    edad:21,
    alias:"Darth",
}
arreglo.push(4)
let valor=arreglo[1]


//destructuracion
//sintaxis array
let [valor1,valor2,valor3,valor4]=arreglo
console.log(valor1)
console.log(valor2)
console.log(valor3)
console.log(valor4)

//sintaxis valor predeterminado
let [valor5=0,valor6=0,valor7=0,valor8=0]=arreglo
console.log(valor5)
console.log(valor6)
console.log(valor7)
console.log(valor8+"    f")

//ignorar elementos

let [valor9=0,,,valor12=0]=arreglo
console.log(valor9)
console.log(valor12)

//objetos

let {name,edad,alias}=persona
console.log(name)
console.log(edad)
console.log(alias)

//valores predeterminador no tiene tanto sentido va por clave no por valor ni posicion como array
let {name2,edad2,alias2,email="dante@gmail.com"}=persona

console.log(name2)
console.log(edad2)
console.log(alias2)
console.log(email)

//objetos anidados

let {name:name3,edad:edad3,alias:alias3}=persona
console.log(name)
console.log(edad3)
console.log(alias3)
let usuario2={
    name:"Dante",
    edad:21,
    alias:"Darth",
    walk:function(){
            console.log("Camina")
    },
    trabajo:{
        name:"dormir",
        xp:15,
        work:function(){
            console.log(`Si ${this.name}`)
        }
    }
}
let {name:name4,trabajo:{name:name5}}=usuario2
console.log(name4)
console.log(name5)

//propagacion
let arreglo2=[...arreglo]//copia
let arreglo3=[...arreglo,5,6]//copia y agregas
console.log(arreglo2)
console.log(arreglo3)

//combinacion de arrays

let arreglo4=[...arreglo2,...arreglo3]
console.log(arreglo4)

//objetos propagar
let persona5={...persona,email:"DANTE@GMAIL.COM"}
console.log(persona5)
let persona4={...persona}
console.log(persona4)
