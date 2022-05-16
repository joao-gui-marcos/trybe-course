//Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
function imprimeQuadrado (n) {
    let string = ""
    for (let i=0;i<n;i+=1){
        string += "*"
    }
    for (let i=0;i<n;i+=1){
        console.log(string)
    }
    }

 //Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
 function imprimeTrianguloRetangulo (n) {
    let string = ""
    for (let i=0;i<n;i+=1){
        string += "*"
        console.log(string)
    }
    }

 //Agora inverta o lado do triângulo.
 function imprimeTrianguloRetanguloInvertido (n) {
    let asteriscos = ""
    let espacos = ""
    let string = ""
    let aux = n
    let aux2 = 1
    for (let i = 1; i <= n; i += 1) {
        for (let i = 1; i <= aux-1; i += 1) {
            espacos += " "
        }
        for (let i = 1; i <= aux2; i += 1) {
            asteriscos += "*"
        }
        string = espacos + asteriscos
        console.log(string)
        aux -= 1
        aux2 += 1
        asteriscos = ""
        espacos = ""
    }
    }

imprimeTrianguloRetanguloInvertido(5)

