// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const sum = (...args) => args.reduce((acc, curr) => acc + curr)
console.log(sum(1, 2, 3, 2, 10, 100)) // 118