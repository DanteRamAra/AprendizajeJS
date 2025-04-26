// 1. Agregega una función al prototipo de un objeto
let obj={
    name:"Dante"
}
obj.comida=function(){
    console.log(`${this.name} tiene hambre`)
}
obj.comida()
// 2. Crea un objeto que herede de otro
let person=Object.create(obj)
person.name="ISRAEL"
person.age=21
console.log(person.name)
console.log(person.age)
person.comida()

// 3. Define un método de instancia en un objeto
function Animal(name){
    this.name=name
    
}
Animal.prototype.sound=function(){
    console.log(`${this.name} emitio un sonido`)
}
let animal=new Animal("Perro")
console.log(animal)
animal.sound()
// 4. Haz uso de get y set en un objeto
//ni idea como se haga el uso de get y set en un obj
// 5. Utiliza la operación assign en un objeto
let animal2={name:"perro",tamanio:"mini"}
let animal3={name:"gato",age:5}
let animal4=Object.assign(animal2,animal3)
console.log(animal4)
// 6. Crea una clase abstracta
class Animal2{
    constructor(name){
        if(new.target===Animal2){
            console.error("No se puede agregar una instancia a una clase abstracta")
        }
        this.name=name
    }
}
let perro=new Animal2("Perro")
// 7. Utiliza polimorfismo en dos clases diferentes
class Dog extends Animal2{
    sound(){
        console.log("GUAU")
    }
}
let dog=new Dog("Snoopy")
console.log(dog.name)
console.log(dog)
dog.sound()

class Cat extends Animal2{
    sound(){
        console.log("MIAU")
    }
}
let cat=new Cat("Michi")
console.log(cat.name)
console.log(cat)
cat.sound()
// 8. Implementa un Mixin

const eat={
    eatA(){
        console.log(`${this.name} esta comiendo`)
    }
}
class Human extends Animal2{}
Object.assign(Human.prototype,eat)
const human1=new Human("Chente")
human1.eatA()
// 9. Crea un Singleton
class Estar{
    constructor(presencia){
        if(Estar.instance){
            return Estar.instance
        }
        this.presencia=presencia
        Estar.instance=this
    }
}
const pres=new Estar("SI")
console.log(pres.presencia)
const pres2=new Estar()
console.log(pres2.presencia)
// 10. Desarrolla un Proxy
const proxy={
    get(target,propiety){
        console.log("BIENVENIDO")
        return target[propiety]
    },
    set(target,propiety,value){
        target[propiety]=value
    }
}
class Session{
    constructor(name){
        this.name=name
    }
}
const user=new Proxy(new Session("DANTE"),proxy)
console.log(user.name)
user.name="PEPE"
console.log(user.name)

