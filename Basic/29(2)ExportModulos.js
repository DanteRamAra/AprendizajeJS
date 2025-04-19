//exportar modulos
export function suma(a,b){
    return a+b
}
export function parametros(nombres) {
    return nombres
}

//exportacion por defecto

export default function resta(a,b){
    return a-b
}

export class Circulo{
    constructor(radio){
        this.radio=radio
    }
    area(){
        return Math.PI*Math.pow(this.radio,2)
    }
}