const currentHour = 5
let message = ""
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!"
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado"
}

console.log(message)

let weekDay = "sabado"

if (weekDay == "segunda" || weekDay == "terca" || weekDay == "quarta" || weekDay == "quinta" || weekDay == "sexta") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}
else {
    console.log("FINALMENTE, descanso merecido UwU")
}