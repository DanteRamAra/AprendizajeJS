//for :D

let array=["MEXICO","EUA","ITALIA"]
for (let index = 0; index < array.length; index++) {
    console.log(array[index])
}

for(let i=0;i<=4;i++){

    console.log(`Hola ${i}`)
}
let i=0;
while (i<5) {
    console.log(`Hola numero: ${i}`)
    i++
}
let j=0
do {
    console.log(`Hola numerin: ${j}`)
    j++
} while (j<8);

//for of

for (let comida of array) {
    console.log(comida)
}