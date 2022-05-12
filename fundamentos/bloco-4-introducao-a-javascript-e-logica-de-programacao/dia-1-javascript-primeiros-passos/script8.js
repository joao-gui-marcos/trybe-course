// valida angulos de um triangulo
const a = 90
const b = 60
const c = 30

if (a+b+c == 180) {
    console.log("true")
}
else if (a<=0 || b<=0 || c<=0) {
    console.log("angulo invalido")
}
else {
    console.log("false")
}