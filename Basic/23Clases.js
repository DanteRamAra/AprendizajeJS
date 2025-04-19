//clases
let person={
    name:"Dante",
    edad:21,
    alias:"Darth",
}

class Persona{
    constructor(name,age,alias){
        this.name=name
        this.age=age
        this.alias=alias
    }
}
//sintaxis
let persona= new Persona("DANTE",21,"DARTH")
console.log(persona)

//valores por defecto
class defecto{
    constructor(name="SIN NOMBRE",age,alias){
        this.name=name
        this.age=age
        this.alias=alias
    }
}
let persona2=new defecto(alias="DARTH")//POR ORDEN
console.log(persona2)
//ACCESO A PROPIEDADES

console.log(persona.alias)//{} o .
persona2.alias="DARTHD"
console.log(persona2)
class PERSONA2{
    constructor(name="SIN NOMBRE",age,alias){
        this.name=name
        this.age=age
        this.alias=alias
    }
    walk(){
        console.log("Camina")
    }
}
let persona3=new PERSONA2("DANTE",21,"DARTH")
persona3.walk()

//privadas
class PERSONA3{
    #alias
    #bank
    constructor(name="SIN NOMBRE",age,alias,bank){
        this.name=name
        this.age=age
        this.#alias=alias
        this.#bank=bank

    }
   
}
let persona4=new PERSONA3("DANTE",21,"DARTH","89446854")
console.log(persona4)
console.log(persona4.bank)
//get y set
class PERSONA4{
    #name
    #bank
    #age
    #alias
    constructor(name="SIN NOMBRE",age,alias,bank){
        this.#name=name
        this.#age=age
        this.#alias=alias
        this.#bank=bank

    }
    get name(){
       return this.#name
    }
    set (bankote){
        return this.#bank=bankote
    }
   
}
let persona5=new PERSONA4("DANTE",21,"DARTH","89446854")
console.log(persona5)
console.log(persona5.name)
console.log(persona5.bank)
persona5=("78999999")
console.log("aa")
console.log(persona5)
//por algun motivo muestra todo esta mierda

//herencia

class Animal{

    constructor(name){
        this.name=name
    }

    sound(){
        console.log("SONIDO")
    }

}
class Pez extends Animal{
    
    constructor(name,size){
        super(name)
        this.size=size
    }
    nada(){
        console.log("NADA")
    }
}
class Perro extends Animal{
    
    run(){
        console.log("Corre")
    }
}
let perro=new Perro("Snoopy")
console.log(perro)
perro.run()
perro.sound()
let pez=new Pez("Nemo",5)
console.log(pez)
console.log(pez.size)
pez.nada()
pez.sound()

//estaticos
class operaciones{
    
    static sum(a,b){
        return a+b
    }

}

console.log(operaciones.sum(4,5))