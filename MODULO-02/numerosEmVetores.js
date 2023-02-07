const {gets} = require('./assets/funcoes-auxiliares');

let vetor = [];
let pares = [];
let impares = [];


for(let i = 0; i < 5; i++) {
    let num = parseInt(gets())
    vetor.push(num)

    if(num % 2 === 0) {
        pares.push(num)
    } else {
        impares.push(num)
    }
}

console.log(`Vetor: ${vetor}`)
console.log(`Par(es): ${pares}`)
console.log(`impar(es): ${impares}`)