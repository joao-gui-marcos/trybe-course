const a = 10
const b = 20
const c = 30

console.log(a+b) //soma
console.log(a-b) //subtracao
console.log(a*b) //multiplicacao
console.log(a/b) //divisao
console.log(a%b) //modulo

if (a>b) { // verifica qual eh o maior numero entre a e b
    console.log("a eh o maior")
}
else if (a<b) {
    console.log("b eh o maior")
}
else if (a==b) {
    console.log("numeros sao iguais")
}

if (a>b && a>c) { // verifica qual eh o maior numero entre a, b e c
    console.log("a eh o maior")
}
else if (b>a && b>c) {
    console.log("b eh o maior")
}
else if (c>a && c>b) {
    console.log("c eh o maior")
}
