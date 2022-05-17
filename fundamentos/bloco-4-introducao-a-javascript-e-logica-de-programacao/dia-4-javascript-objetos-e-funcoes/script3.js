//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function ehPalindromo (string) {
    let invertedString = ''
    for (let i = string.length-1; i >= 0; i -= 1) {
        invertedString += string[i]
    }
    if (invertedString === string) {
        return true
    } else {
        return false
    }
}

console.log(ehPalindromo('arara'))

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function indiceDeMaiorValor (array) {
    let index = 0
    for (let i =0; i<array.length; i+=1) {
        if (array[i] > array[index]) {
            index = i
        }
    }
    return index
}

console.log(indiceDeMaiorValor([2, 3, 6, 7, 10, 1]))

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function indiceDeMenorValor (array) {
    let index = 0
    for (let i =0; i<array.length; i+=1) {
        if (array[i] < array[index]) {
            index = i
        }
    }
    return index
}

console.log(indiceDeMenorValor([2, 4, 6, 7, 10, 0, -3]))

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorNome (array) {
    let index = 0
    for (let i =0; i<array.length; i+=1) {
        if (array[i].length > array[index].length) {
            index = i
        }
    }
    return array[index]
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete
function inteiroMaisRecorrente (array) {
    let maiorContagem = 0
    let contagemAtual = 0
    let index = 0
    for (let i = 0; i<array.length; i+=1) {
        for (let j = 0; j<array.length; j+=1) {
            if (array[i] === array[j]) {
                contagemAtual += 1
            }
        }
        if (contagemAtual > maiorContagem) {
            maiorContagem = contagemAtual
            index = i
        }
        contagemAtual = 0
    }
    return array[index]
}

console.log(inteiroMaisRecorrente([2, 3, 2, 5, 8, 2, 3]))

//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function somatorio (n) {
    let sum = 0
    for (let i =1; i<=n; i +=1) {
        sum += i
    }
    return sum
}

console.log(somatorio(5))

//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
function verificaFimPalavra (word, ending) {
    let j = word.length - 1
    for (let i =ending.length-1; i>=0; i-=1) {
        if (ending[i] != word[j]) {
            return false
        }
        j-=1
    }
    return true
}

console.log(verificaFimPalavra('trybe', 'be'))