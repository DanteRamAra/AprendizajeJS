// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const array=[4,1,6,8,9,3,1,4]
const arrayMap=array.map(elemet=>elemet/2)//devuelve array
console.log(arrayMap)
const arrayFilter=array.filter(element=>(element*2)>4)//devuelve array
console.log(arrayFilter)
const arrayReduce=array.reduce((anterior,actual)=>anterior*actual)//devuelve solo un valor
console.log(arrayReduce)
// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const arrElev=array.map(element=>element*element)
const filtro=arrElev.filter(element=>element%2==0)
console.log(filtro)
// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let anidado=["hola",["gente",["de",["aqui"]]]]
console.log(anidado.flat(5))
let FM=["hola mundote","DOTE DOTE"]
console.log(FM.flatMap(element=>element.slice(2)))
// 4. Ordena un array de números de mayor a menor
let arryordenado=array.sort((a,b)=>a-b)
console.log(arryordenado)
console.log(arryordenado.reverse())
// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
const set=new Set([1,2,3,4,5,6])
const set2=new Set([4,5,6,7,8,9])
const union=new Set([...set,...set2])
console.log(union)
const inter=new Set([])
for (const element of set) {
    for (const element2 of set2) {
        if(element===element2){
            inter.add(element)
        }
    }
}
console.log(inter)

const diff=new Set([...set].filter(element=>!set2.has(element)))
console.log(diff)
// 6. Itera los resultados del ejercicio anterior
diff.forEach(element =>console.log(element));
// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos
const map=new Map([["name","dante"],["age",21],["email","dante@gmail.com"]])
for (const [key,value] of map) {
    console.log(`La clave es ${key}:${value}`)
}
// 8. Dado el mapa anterior, crea un array con los nombres
const arrmap=Array.from(map)
console.log(arrmap)

