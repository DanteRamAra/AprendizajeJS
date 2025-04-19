/*
coleccion de caracterisiticas de algo de la vida real
*/ 

//sintaxis
let persona={
    name:"Dante",
    edad:21,
    alias:"Darth",
}

//acesso 
console.log(persona.name)
console.log(persona["name"])

//modificacion
persona.name="Israel"
console.log(persona.name)

//modificacion propiedades
delete persona.edad
console.log(persona)
persona.email="dante@gmail.com"
console.log(persona)

//funciones

let usuario={
    name:"Dante",
    edad:21,
    alias:"Darth",
    walk:function(){
            console.log("Camina")
    }
}
usuario.walk()
console.log(usuario)

//anidar
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
console.log(usuario2)
console.log(usuario2.trabajo.work())

//igualdad
let persona2={
    name:"Dante",
    edad:21,
    alias:"Darth",
}
//se comparan propiedad por propiedad

//iteracion

for (let clave in persona2) {
    console.log(clave+":"+persona2[clave])
}