let str = "Esse desafio foi facil"; 
let strSplit = str.split('');
let spaces = 0
let vowels = 0

for(let i = 0; i < str.length; i++) {
  
  if (str[i] === " ") {
    spaces++
  } else if (str[i].match(/[aeiouAEIOU]/)) {
    vowels++
  }
  
}

console.log(`Espacos em branco: ${spaces} Vogais: ${vowels}`)