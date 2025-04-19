function nuevoF() {
    for(let i = 0; i <= 4; i++) {
        console.log(`Hola`);
    }
}
nuevoF();

function parametros(nombres) {
    console.log(`Hola ${nombres}`);
}
parametros("Dante");

const fun2 = function(nombres) {
    console.log(`Hola ${nombres}`);
};
fun2("DARTH");

const fun3 = (nombres) => {
    console.log(`Hola ${nombres}`);
};
fun3("DD");

function sum(a, b) {
    console.log(a + b);
}
sum(5, 10);

function defsum(a = 0, b = 0) {
    console.log(a + b);
}
defsum(3);

 function mul(a, b) {
    return a * b;
}

function fuera() {
    function interna() {
        console.log("Hola adentro");
    }
    console.log("Hola fuera");
    interna();
}
fuera();

function superior(fun, param) {
    fun(param);
}
superior(fun2, "hola");  // Esta es la línea corregida


//foreach

let array=[1,2,3,4,5,6]
array.forEach(element => console.log(element))
array.forEach(function (value) {
    console.log(value)
})
