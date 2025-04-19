export function mul(a, b) {
    return a * b;
}
export const edad=23

export class comida{
    constructor(nombre){
        this.nombre=nombre
    }
    lista(){
        return `la comida ${this.nombre} esta lista`
    }
}

export function suma(a,b){
    return a+b
}
export default class cosa{
    constructor(nombre){
        this.nombre=nombre
    }
    lista(){
        return `la cosa ${this.nombre} esta lista`
    }
}