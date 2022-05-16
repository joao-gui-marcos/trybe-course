let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let media = 0
let maiorValor = numbers[0]
let contagemImpares = 0


//for (let number of numbers) {
    //console.log(number)
//}

for (var i = 0; i < numbers.length-1; i++) {
    soma += numbers[i]
}

media = soma/i
console.log(media)

if (media>20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
}

for (let index =0; index<numbers.length-1;index++) {
    if (numbers[index]>maiorValor) {
        maiorValor=numbers[index]
    }
    if (numbers[index]%2 != 0) {
        contagemImpares++
    }
}
console.log(contagemImpares)

