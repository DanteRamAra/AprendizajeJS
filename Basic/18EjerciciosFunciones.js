// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a,b){
    return a+b    
}
console.log(suma(7,8))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let numero=[1,2,3,4,5,6,8,0]
let mayorn=numero[0]
function mayor(arreglo){
    for (let i = 1; i <numero.length; i++) {
            if(mayorn<numero[i]){
                mayorn=numero[i]//use == en vez de =
            }
        
    }
    console.log(`El numero mayor es ${mayorn}`)
}
mayor(numero)
// 3. Crea una función que reciba un string y devuelva el número de caracteres que contiene
let cadena="HOLA ME LLAMO DANTE"
function contador(cadena){
    let contador=0;
    for (let index = 0; index < cadena.length; index++) {
        if(cadena[index]==="A" ||cadena[index]==="E" || cadena[index]==="I" || cadena[index]==="O" || cadena[index]==="U" ){
            contador++
        }
        
    }
    console.log(`EL TOTAL DE VOCALES ES ${contador}`)
}
contador(cadena)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let array1=["El madrid remonta?","si remonta","si x2"]
let array2=[]
function mayus(array){
    for (let i = 0; i < array1.length; i++) {
            array2.push(array1[i].toLocaleUpperCase())
    }

    console.log(array2)
}
mayus(array1)
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let num=112
function primo(num){
    let divisores=0
    for (let i = 1; i <Math.sqrt(num); i++) {
        if(num%i===0){
            divisores++
        }
        
    }
    if(divisores==2){
        return true
        
    }else{
        return false
    }   
    
}
console.log(primo(num))
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array3=[1,32,8,3,445,6]
let array4=[6,445,8,88,315]
let array5=[]
function comun(array,array){
    for (let i = 0; i < array3.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array3[i]===array4[j]){
                array5.push(array3[i])
            }            
        }
    }
    return array5
}
console.log(comun(array3,array4))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
sum=0
function sumarray(array){
    for (let i = 0; i < array3.length; i++) {
        if(array3[i]%2==0){
            sum+=array3[i]
        }
    }
    return sum
}
console.log(sumarray(array3))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
array6=[]
function cuadrado(array){
    for (let i = 0; i < array3.length; i++) {
        array6.push(array3[i]*array3[i])    
    }
    return array6
}
console.log(cuadrado(array3))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(cadena) {
    return cadena.split(" ").reverse().join(" ");
}

//split divide la cadena apartir de split() 
//reverse invierte el orden join mete
console.log(invertirPalabras("Hola mundo")); // "mundo Hola"
// 10. Crea una función que calcule el factorial de un número dado
let nu=8
function fac(numero){
    for (let i = nu-1; i>1; i-- ){
        nu*=i
        console.log(nu)
    }
    return nu
}
console.log(fac(nu))