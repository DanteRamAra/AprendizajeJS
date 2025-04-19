let objeto
//console.log(objeto.name)

//errores

//try catch

try {
    console.log(objeto.name)
} catch (error) {
    console.log("Error: ",error.message)
}


try {
    console.log(objeto.name)
} catch (error) {
    console.log("Error: ",error.message)
}finally{// continua con error si o si
    console.log("S")
}

//throw
//throw new Error("Errooooor");

function sum(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("No se suma")
    }
    return a+b
}
try {
    console.log(sum("3",10))    
} catch (error) {
    console.log("Se produjo un error: ",error.message)
}

class error extends Error{
    constructor(message,a,b){
        super(message)
        this.a=a
        this.b=b
    }
}