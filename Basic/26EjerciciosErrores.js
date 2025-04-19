// 1. Captura una excepción utilizando try-catch
let numero2
try {
    console.log(numero2[i])    
} catch (error) {
    console.log("ERROR",error.message)
}finally{
    console.log("No es un arreglo")
}
// 2. Captura una excepción utilizando try-catch y finally
function numero(numero1){
    try {
        if(numero1!=Number){
            throw new Error("Es un error");
        }
    } catch (error) {
        console.log("ERROR",error.message)

    }
}
let numero1=numero("DANTE")

// 3. Lanza una excepción genérica
//en el paso 2
// 4. Crea una excepción personalizada
// Definimos una clase de excepción personalizada
class MiExcepcionPersonalizada extends Error {
    constructor(mensaje,name) {
      super(mensaje);
      this.name =name;
    }
  }
  
  function procesarDato(dato) {
    if (dato !== "válido") {
      throw new MiExcepcionPersonalizada("El dato proporcionado no es válido");
    }
    return "Dato procesado correctamente";
  }
  
  try {
    console.log(procesarDato("inválido"));
  } catch (error) {
    if (error instanceof MiExcepcionPersonalizada) {
      console.error("Excepción personalizada atrapada:", error.message);
    } else {
      console.error("Otro tipo de error:", error.message);
    }
  }
  
// 5. Lanza una excepción personalizada
//paso 4
// 6. Lanza varias excepciones según una lógica definida

let numero4 = 4;
let numero3 = 3;

try {
  if (typeof numero3 !== "number") {
    throw new TypeError("numero3 no es un tipo number");
  } else if (numero4 !== numero3) {
    throw new Error("numero4 y numero3 no son estrictamente iguales");
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Tipo de error:", error.message);
  } else {
    console.log("Otro error:", error.message);
  }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10