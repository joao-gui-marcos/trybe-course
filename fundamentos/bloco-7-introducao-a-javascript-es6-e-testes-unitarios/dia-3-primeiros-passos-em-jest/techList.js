function techList(array, string) {
  // seu código aqui
  let result = []
  if (array.length === 0) {
    return 'Vazio!'
  }
  array.sort()
  for (let i = 0; i<array.length; i+=1) {
    let obj = {}
    obj['tech'] = array[i]
    obj['name'] = string
    result.push(obj)
  }
  return result
}

module.exports = techList