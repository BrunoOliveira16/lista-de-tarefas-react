const entradas = [3,4,6,9,10];
let i = 0;

function gets(){
    const valor = entradas[i];
    i = i + 1;
    return valor
}


module.exports = { gets};