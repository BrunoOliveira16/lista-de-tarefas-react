let date = "19/01/1997";
let dateSplit = date.split('/');

const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const day = dateSplit[0];
const month = dateSplit[1] - 1;
const year = dateSplit[2];

const formatDate = `${day} de ${monthNames[month].charAt(0).toUpperCase() + monthNames[month].slice(1)} de ${year}`;

console.log(formatDate);



//Solução utilizando Switch
let data = "11/07/2022"
let dataSplit = data.split("/")

let dia = dataSplit[0]
let mes = dataSplit[1]
let ano = dataSplit[2]

switch(mes) {
    case "01":
        mes = "Janeiro"
        break
    case "02":
        mes = "Fevereiro"
        break
    case "03":
        mes = "Março"
        break
    case "04":
        mes = "Abril"
        break
    case "05":
        mes = "Maio"
        break
    case "06":
        mes = "Junho"
        break
    case "07":
        mes = "Julho"
        break
    case "08":
        mes = "Agosto"
        break
    case "09":
        mes = "Setembro"
        break
    case "10":
        mes = "Outubro"
        break
    case "11":
        mes = "Novembro"
        break
    case "12":
        mes = "Dezembro"
        break
    default:
        mes = "Inválido"
}

console.log(`${dia} de ${mes} de ${ano}`)