// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz
let peca = "bispo"
switch (peca) {
    case "cavalo":
        console.log("L")
        break
    case "peao":
        console.log("pra frente")
        break
    case "torre":
        console.log("linha reta")
        break
    case "bispo":
        console.log("diagonais")
        break
    case "rei":
        console.log("um pra qualquer lado")
        break
    case "rainha":
        console.log("qualquer direcao fixa")
        break
    default:
        console.log("nao eh peca")
        break
}