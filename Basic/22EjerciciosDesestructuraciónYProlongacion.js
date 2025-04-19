// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let array=[1,2,3,5,9,7,4]
let[n1,n2]=array
console.log(n1)
console.log(n2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let array2=[1,3]
let[n3,n4,n5=0]=array2
console.log(n3)
console.log(n4)
console.log(n5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona={
    name:"DANTE",
    edad:21,
    come:"SI"
}
let {name,edad}=persona
console.log(name)
console.log(edad)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name:name2,edad:edad2}=persona
console.log(name2)
console.log(edad2)
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let usuario2={
    name:"Dante",
    edad:22,
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
let {name:name3,trabajo:{name:name4,xp}}=usuario2
console.log(name3)
console.log(name4)
console.log(xp)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let array3=[...array,...array2]
console.log(array3)
// 7. Usa propagación para crear una copia de un array
let array4=[...array]
console.log(array4)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let persona3={...persona,...usuario2}
console.log(persona3) //como ambos objetos tienen la clave con el mismo nombre solo toma una clave y su valor, falta entender cual toma primero y porque
// 9. Usa propagación para crear una copia de un objeto
let persona4={...persona}
console.log(persona4)
// 10. Combina desestructuración y propagación
let array5=[valor,valor2,...array2]=array
console.log(array5)
