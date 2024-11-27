let frase = "JavaScript é legal em";

// Descobrir o tamanho da string
console.log(frase.length);

// Deixar a frese toda em maiuscula

console.log(frase.toUpperCase());

// Deixar a frese me minuscolo

console.log(frase.toLocaleLowerCase());

// Encontra a posição da string

console.log(frase.indexOf("legal"));

// Extrair uma parte da string

console.log(frase.substring(0,10))

// Substituir uma parte da string

let novafrase = frase.replace("legal" , "incrível");
console.log(novafrase);

// Interpolção de string

let nome = "Shellton";
let idade = "33";
let mensagem = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem);