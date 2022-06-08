// function testingScope(escopo) {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   // console.log(ifScope + ' o que estou fazendo aqui ? :O');
// }

// testingScope(true);

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O');
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => console.log(`Os números ${oddsAndEvens[5]},${oddsAndEvens[1]},${oddsAndEvens[2]},${oddsAndEvens[4]},${oddsAndEvens[3]},${oddsAndEvens[0]} se encontram ordenados de forma crescente!`)

sortArray(oddsAndEvens);

const fatorial = num => {
  let resultado = 1
  for (let i = num; i > 0; i -= 1) {
    resultado = resultado*i
  }
  console.log(resultado)
}

fatorial(6)

const maiorPalavra = string => {
  let words = string.split(' ')
  let flag = 0
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > words[flag].length) {
      flag = i
    }
  }
  console.log(words[flag])
}

maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'