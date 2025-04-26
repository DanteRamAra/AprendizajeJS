//Clases avanzadas
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}
let person=new Person("DANTE",21)
console.log(person.name)
person.greet()
person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()

//Abstraccion Ocultar los detalles complejos y mostrar solo lo esencial.

class Animal{
    constructor(name){
        if(new.target===Animal){
            throw("No se pueden instanciar clases abstractas")
        }
        this.name=name
    }
    sound(){
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}
/*
let dog=new Animal("Snoopy")
console.log(dog)
dog.sound()
*/ 
//polimorfismo, implementar metodos con comportamientos diferentes
class Dog extends Animal{
    sound(){
        console.log("GUAU")
    }
}
class Cat extends Animal{
    sound(){
        console.log("MIAU")
    }
}
let cat=new Cat("Garfield")
console.log(cat.name)
cat.sound()
let dog=new Dog("Snoopy")
console.log(dog.name)
dog.sound()

//Mixins
/*
agregar funciones u objetos sin usar herencia
*/

const Fly={
    fly(){
        console.log("Vuela")
    }
}

class Bird extends Animal{}
Object.assign(Bird.prototype,Fly)
const birD=new Bird("Emilio")
console.log(birD.name)
birD.fly()

//patron singleton 

class session{//unica instancia
    constructor(name){
        if(session.instance){
            return session.instance
        }
        this.name=name
        session.instance=this
    }
}
const user=new session("DANTE")
const user2=new session()

console.log(user.name)
console.log(user2.name)
console.log(user===user2)

//symbol
const ID=Symbol("id")//unica
class User{//unica instancia
    constructor(name){
        this.name=name
        this[ID]=Math.random()
    }
    getID(){
        return this[ID]
    }
}
const user3=new User("Javier")
console.log(user3.name)
console.log(user3.getID())

//instanceof

class Car{}
const car=new Car()
console.log(car instanceof Car)

//create 
const car1=Object.create(Car.prototype)
console.log(car instanceof Car)

//Proxy (seguridad,validaciones)
const proxy={//target (instancia)
    get(target,propiety){
        console.log("Se accedio a tu balance")
       return target[propiety]
    },
    set(target,propiety,value){ 
        if(propiety==="balance" && value<0){
            console.warn("el saldo no puede ser negativo")
        }else{
            target[propiety]=value
        }

    }
}
class Bank{
    constructor(balance){
        this.balance=balance
    }
}
const bank=new Proxy(new Bank(100),proxy)
console.log(bank.balance)
bank.balance=250
console.log(bank.balance)
bank.balance=-250
console.log(bank.balance)
