// 1. Crea una clase que reciba dos propiedades
class ej1{
    constructor(numero1,numero2){
        this.numero1=numero1
        this.numero2=numero2

    }

}
let numero=new ej1(5,4)
console.log(numero)
// 2. Añade un método a la clase que utilice las propiedades
class ej2{
    constructor(numero1,numero2){
        this.numero1=numero1
        this.numero2=numero2

    }
    mostrar(){
        return console.log(`tu numero 1 es ${this.numero1}`)
    }
    static multi(numero1,numero2){
        return numero1*numero2
    }


}
let numero2=new ej2(5,4)
console.log(numero2.numero1)
console.log(numero2.numero2)
numero2.mostrar()
// 3. Muestra los valores de las propiedades e invoca a la función
//hecho en la parte anterior
// 4. Añade un método estático a la primera clase
console.log(ej2.multi(2,8))
//ya y lo estoy imprimiendo
// 5. Haz uso del método estático
//hecho en el paso 4
// 6. Crea una clase que haga uso de herencia
class Usuario{
    constructor(name,edad){
        this.name=name
        this.edad=edad
    }
    saludo(){
        console.log("HOLA")
    }
}
class nacionalidad extends Usuario{
    constructor(name,edad,nacionalidaD){
        super(name,edad)
        this.nacionalidaD=nacionalidaD
    }
    saludo(){
        console.log("TACOS")
    }
}
let dante=new nacionalidad("Dante",21,"Mexicano")
console.log(dante)
dante.saludo()
// 7. Crea una clase que haga uso de getters y setters
class Animal{
    #name
    #edad
    constructor(name,edad){
        this.#name=name
        this.#edad=edad
    }
    get edad(){
        return this.#edad
    }
    get name(){
        return this.#name
    }
    set name(nombre){
        return this.#name=nombre
    } 
    set edad(edad2){
        return this.#edad=edad2
    }
    sound(){
        console.log("SONIDO")
    }

}
let animal=new Animal("dante",2)
console.log(animal.name)
console.log(animal)
animal.name="A"
animal.edad=4
console.log(animal)

// 8. Modifica la clase con getters y setters para que use propiedades privadas
//paso anterior
// 9. Utiliza los get y set y muestra sus valores
//no me muestra nada
// 10. Sobrescribe un método de una clase que utilice herencia 