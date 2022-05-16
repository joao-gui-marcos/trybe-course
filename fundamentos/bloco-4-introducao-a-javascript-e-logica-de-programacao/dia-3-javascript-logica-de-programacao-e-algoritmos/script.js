//crie um algoritmo que retorne o fatorial de 10
let resultado = 1

for (let i = 10; i >=1; i-=1) {
    resultado = resultado*i
}
console.log(resultado)

//desenvolva um algoritmo que é capaz de inverter uma palavra
let word = "tryber"
let invertedWord = ""

for (let i = word.length-1; i>=0; i-=1) {
    invertedWord += word[i]
}
console.log(invertedWord)

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = 0
let menorPalavra = 0

for (let i =0; i<array.length;i+=1){
    if (array[i].length > array[maiorPalavra].length) {
        maiorPalavra = i
    }
}
console.log(array[maiorPalavra])

for (let a =0; a<array.length;a+=1){
    if (array[a].length < array[menorPalavra].length) {
        menorPalavra = a
    }
}
console.log(array[menorPalavra])

//escreva um algoritmo que retorne o maior número primo entre 0 e 50
let flag = true
let maiorPrimo = 2
function ehPrimo (numero) {
    for (let i=2;i<numero;i+=1){
        if (numero%i === 0) {
            flag = false
        }
    }
    return flag
}
for (let i = 2;i<=50;i+=1) {
    if (ehPrimo(i)) {
        maiorPrimo = i
    }
    flag = true
}
console.log(maiorPrimo)