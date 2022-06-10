function hydrate(string) {
  // seu código aqui
  let reg = /\d+/g
  let result = string.match(reg)
  let total = 0
  let totalString = ''
  let msg = ''
  for (let i = 0; i<result.length; i+=1) {
    total += parseInt(result[i])
  }
  totalString += total.toString()
  if (total === 1) {
    msg = totalString + ' copo de água'
  } else {
    msg = totalString + ' copos de água'
  }
  
  return msg
}

module.exports = hydrate