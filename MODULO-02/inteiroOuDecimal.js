let valor = 1.5
let resposta = ""

if (typeof(valor) == "number") {
    if (valor % 1 === 0) {
        resposta = "Inteiro"
     } else {
        resposta = "Decimal"
     }
} else {
    resposta = "Favor Digite um número e tente novamente"
}
console.log(resposta)


// Solução com o ES6
let numero = 1
let respostaNum = ""

if(Number.isInteger(numero)) {
    respostaNum = "Inteiro"
} else {
    respostaNum = "Decimal"
}
console.log(respostaNum)