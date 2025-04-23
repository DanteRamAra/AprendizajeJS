//operadores aritmeticos
let a=5
let b=10
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

console.log(a%b)
console.log(a**b)//exponente
a++ //incremento
console.log(a)
b--//decremento
console.log(b)

//operaciones de asignacion

let variable=2
variable+=2//se puede hacer con todas las anteriores
console.log(variable)

//operadores de comparacion
console.log(a>b)
console.log(a<b)
console.log(a==b)
console.log(a!=="6")

/*
valores verdaderos
diferentes de 0
bool true
cadenas de texto no vacias
*/ 

/*
valores falsos
0
0n
null
undefined
Nan
bool false
cadenas vacias
*/

//operadores logicos
//and (&&) or(||)

console.log(5>10 && 15>20)
console.log(5<10 || 5>10)

//not (!) 
console.log(!(5>10 && 15>20))

//ternarios
const llueve=false
//apartir de una variable,true  pasa algo: false pasa otro algo 
llueve ? console.log("LLueve"):console.log("no llueve")