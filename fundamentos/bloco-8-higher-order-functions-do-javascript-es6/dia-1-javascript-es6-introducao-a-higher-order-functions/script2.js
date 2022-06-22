const drawResult = (bet, func) => {
  const drawNumber = Math.floor(Math.random() * 5) + 1
  if (func(bet, drawNumber)) {
    return `Parabéns você ganhou ${bet} ${drawNumber}`
  }
  return `Tente novamente ${bet} ${drawNumber}`
}

const checkBet = (number1, number2) => (number1 === number2) ? (true) : (false)

console.log(drawResult(1,checkBet))


