// 1. Crea un función que utilice error correctamente
function sum(a,b){
    if(a<0){
        console.error("La suma da un negativo", new Error("Es un numero negativo"))
    }else{
        return a+b
    }
}
sum(-4,3)
// 2. Crea una función que utilice warn correctamente
function res(a,b){
    if(a<0){
        console.warn("Deberias agregar un numero positivo")
    }else{
        return a-b
    }
}
res(-4,3)
console.time("Inicio")
// 3. Crea una función que utilice info correctamente
function multi(a,b){
    if(a<0){
        console.info("AGREGA UN NUMERO POSITIVO")
    }else{
        return a*b
    }
}
multi(-4,3)
console.count("INicio")
// 4. Utiliza table
let array=["DANTE","ISRAEL"]
console.table(array)
// 5. Utiliza group
console.group("NOMBRES")
console.log("DANTE")
console.log("ISRAEL")
console.groupEnd()
// 6. Utiliza time
console.timeEnd("Inicio")
// 7. Valida con assert si un número es positivo
console.assert(1>2,"Es menor")
// 8. Utiliza count
console.count("FIN")
// 9. Utiliza trace
console.trace("se ejecuto todo esto")

// 10. Utiliza clear
console.clear()