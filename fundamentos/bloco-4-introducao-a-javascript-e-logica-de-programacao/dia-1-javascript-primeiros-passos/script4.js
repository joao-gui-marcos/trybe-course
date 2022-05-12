const nota = 90
let estadoPessoa = ""
if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
    estadoPessoa = "aprovada"
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera")
    estadoPessoa = "lista"
}
else {
    console.log("Você foi reprovada(o)")
    estadoPessoa = "reprovada"
}

switch (estadoPessoa) {
    case "aprovada":
        console.log("aprovada")
        break

    case "lista":
        console.log("lista")
        break
    case "reprovada":
        console.log("reprovada")
        break
    default:
        console.log("nao se aplica")
}