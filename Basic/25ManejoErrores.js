//Manejo de errores (excepciones)
//gestionar errores para que si se produce continuar con el programa (que no rompa el programa)



//try catch
let objeto

try {
    console.log(objeto.nombre)
} catch (error) {
    console.warn("Hay un error")
    
}

//capturar el error
try {
    console.log(objeto.email)
} catch (error) {
    console.warn("Hay un error",error.message)
    
}

try {
    console.log(objeto.saludo)
} catch (error) {
    console.warn("Hay un error",error.message)
    
}finally{//se ejecuta si o si
    console.log("Bienvenido")
}
//lanzar errores
//throw
function sum(a,b) {
    if((typeof a!=="number") ||(typeof b!=="number") ){
        throw new TypeError("No se pueden sumar")
    }else{
        return a+b
    }
}
try {
    console.log(sum("5",10))    
} catch (error) {
    if(error instanceof TypeError){
        console.warn("Esto es un nuevo error de tipo ",error.message)
    }else if(error instanceof Error){
        console.warn("Esto es un nuevo error",error.message)
}
}

//excepciones personalizadas
function suma2(a,b) {
    if(a===0 ){
        throw new Sum2("Se esta pasando un CERO")
    }else{
        return a+b
    }
}
class Sum2 extends Error{
    constructor(message,a,b){
        super(message)
        this.a=a
        this.b=b
    }
    print(){
        console.log(a)
    }
}

try {
    console.log(suma2(0,4))
    
} catch (error) {
    console.log("Se esta produciendo un error ",error.message)
}