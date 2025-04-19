// 1. Crea una variable para cada operación aritmética
let a=2
let b=4

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
// Operadores de asignación
let sumaAsignacion = a += 3; // a = a + 3 → ahora a vale 5
let restaAsignacion = b -= 2; // b = b - 2 → ahora b vale 2
let multAsignacion = a *= 2; // a = a * 2 → ahora a vale 10 (si antes era 5)
let divAsignacion = b /= 2; // b = b / 2 → ahora b vale 1 (si antes era 2)
let modAsignacion = a %= 3; // a = a % 3 → ahora a vale 1 (10 % 3 = 1)
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a<b)
console.log(a>b)
console.log(a!=b)
console.log(a<b)



// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a<b)
console.log(a>b)
console.log(a!=b)
console.log(a<b)
// 5. Utiliza el operador lógico and
console.log( a>1 && b>1)

// 6. Utiliza el operador lógico or
console.log(a>5 || b>1)
// 7. Combina ambos operadores lógicos
console.log((a>5 || b>1) &&(a>1 || b>1))
// 8. Añade alguna negación
console.log(!(a>5 || b>1))

// 9. Utiliza el operador ternario
const comida=true
comida ? console.log("Come"):console.log("No comas")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(a+5>b+4 || a>b)