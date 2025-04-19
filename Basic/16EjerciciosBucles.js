// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let  i= 1;  i<21; i++) {
    console.log(`Hola numero ${i}`)
}
//Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma=0

let i=1
while(i<=100){
    suma+=i
    i++
}
console.log(`SUMA ${suma}`)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let  i= 1;  i<=50; i++) {
    if((i%2===0)){
        console.log(`Hola numero par ${i}`)
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres=["DANTE","JUAN","PEDRO","BATMAN"]

for (let i = 0; i < nombres.length; i++) {
    console.log(`BIENVENIDO ${nombres[i]}`)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena="HOLA ME LLAMO DANTE"
let contador=0;
for (let index = 0; index < cadena.length; index++) {
    if(cadena[index]==="A" ||cadena[index]==="E" || cadena[index]==="I" || cadena[index]==="O" || cadena[index]==="U" ){
        contador++
    }
    
}
console.log(`EL TOTAL DE VOCALES ES ${contador}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros=[1,2,3,4,5,6,7,8,9]
let multi=1
for(let i=0;i<numeros.length;i++){
    multi*=numeros[i]
    if(i===numeros.length-1){
        console.log(`El resultado es ${multi}`)
    }
}
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let q=0
multi=1
do{
    multi=5*q
    console.log(`5x${q}=${multi}`)
    q++
}while(q<=10);
// 8. Usa un bucle para invertir una cadena de texto
let string=""
for(let i=cadena.length-1;i>=0;i--){
        string+=cadena[i]
}
console.log(string)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

i=0
let fibo=0
while(i<12){
    if(i===0 || i===1){
        console.log(i)
    }else if(i===2){
        console.log(i-1)
    }else{
        fibo+=i-2
        console.log(fibo)
    }
    i++
    
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let final=[1,2,3,40,50,44,66,77,88,1]
let ultimo=[]
for(let i=0;i<final.length;i++){
    if(final[i]>10){

        ultimo.push(final[i])     
    }
}
for (let index = 0; index < ultimo.length; index++) {
    console.log(ultimo[index])
    
}