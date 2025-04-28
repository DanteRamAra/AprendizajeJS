// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".


function step2(name,callback) {
    setTimeout(() => {
        callback(name)
    }, 2000)
}
function greet(name) {
    console.log(`Hola ${name}`)
}
step2("DANTE",greet)
// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback) {
    setTimeout(() => {
        console.log("Primer task")
        callback()
    }, 1000);
}
function task2(callback) {
    setTimeout(() => {
        console.log("segundo task")
        callback()
    }, 1000);
}
function task3(callback) {
    setTimeout(() => {
        console.log("tercer task")
        callback()

    }, 1000);
}

/*
task1(()=>{
    task2(()=>{
        task3(()=>{
            console.log("ejercicio 2 terminado")
        })
    })
})
*/
task1(()=>task2(()=>task3(()=>console.log("Hola mundo"))))

// 3. Crea una función para verificar un número que retorne una Promesa. 

function verifica(numero) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if (numero%2==0) {
                resolve("número par")
            }else{
                reject("número impar")
            }
        }, 2000);
    })

}
let numero=21
verifica(numero)
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch(error => {
        console.log(error)
    })


//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask() {
    return new Promise(resolve=>{
        setTimeout(() => {
                console.log("Primer tarea completada")
                resolve()
        }, 1000);
    })

}
function secondTask() {
    return new Promise(resolve=>{
        setTimeout(() => {
                console.log("segunda tarea completada")
                resolve()
        }, 2000);
    })

}
function thirdTask() {
    return new Promise(resolve=>{
        setTimeout(() => {
                console.log("tercer tarea completada")
                resolve()
        }, 1500);
    })

}
firstTask()
    .then(() => secondTask())
    .then(() => thirdTask())
    .then(() => console.log("Encapsulamiento"));


// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
function wait(time) {
    return new Promise(resolve=>setTimeout(resolve,time))
}
async function ej5() {
    console.log("Inicio async")
    await wait(1000)
    console.log("Primer tarea completada")
    await wait(2000)
    console.log("segunda tarea completada")
    await wait(1500)
    console.log("tercer tarea completada")
}
ej5()
// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(id<5){
                
                resolve(`El id es Usuario: ${id}`)
            }else{
                reject("Usuario no encontrado")
            }
        }, 2000);
    })
}

let id=1

async function ej6() {
    console.log("Inicio API")
    await wait(2000)
    getUser(id).then(mensaje=>{
        console.log(mensaje)
    }).catch(error=>{
        console.log(error)
    })
}
ej6()

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")
//Inicio
//Fin
//Promesa resuelta
//setTimeout ejecutado

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
//no entendi
// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
//hecho algo similar en pasos anteriores
// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
function checkBalance() {
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log("El saldo es 500")
        }, 1000);
    })
}
function withdrawMoney(saldo,amount) {
    return new Promise((resolve,reject)=>{
        if(saldo-amount>0){
            console.log(`Retirando ${amount}`)
            resolve(`Restante ${saldo-amount}`)
        }else{
            reject("No hay fondos")
        }
    })
}
let saldo=500
let amount=300
async function cajero() {
    checkBalance()
    await wait(2000)
    withdrawMoney(saldo,amount)
    .then(mensaje=>{
        console.log(mensaje)
    })
    .catch(error=>{
        console.error(error)
    })
    saldo=200
    amount=300
    await wait(2000)
   withdrawMoney(saldo,amount)
    .then(mensaje=>{
        console.log(mensaje)
    })
    .catch(error=>{
        console.error(error)
    })
}
cajero()