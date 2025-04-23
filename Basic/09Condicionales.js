//condicionales
//if, else if,else
//if

/*
SI CONDICION
    ENTONCES
SINO
    ENTONCES
*/
let edad=18
if (edad>=18) {
    console.log("Mayor de edad")
}

//else

if (edad>=25) {
    console.log("ya casi 30")
} else {
    console.log("Joven")
}


//else if
/*
SI CONDICION
    ENTONCES
SINO CONDICION
    ENTONCES
SINO
    ENTONCES
    
*/
if (edad==21) {
    console.log("La edad es la de dante")
} else if(edad>=18){
    console.log("Mayor de edad")
}else{
    console.log("Menor")
}

//operador ternario
//CONDICION?SE CUMPLE:NO SE CUMPLE
const msj=edad==18 ?"Mayoooor de edad" : "Menor"

console.log(msj)

let dia=5

switch (dia) {
    case 0:
        console.log("Lunes")
        break;
    case 1:
        console.log("Martes")
    break;
    case 2:
        console.log("Miercoles")
    break;
    default:
        console.log("Te inventaste un dia")
        break;
}