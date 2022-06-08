const replaceX = (string1,string2) => {
  for (let i = 0; i < string1.length; i += 1) {
    if (string1[i] == 'x') {
      string1 = `Tryber ${string2} aqui!`
      break
    }
  }
  console.log(string1)
  return string1
}

replaceX('Tryber x aqui!','Bebeto')

let skills = ['html','css','js','react','git']

const addSkills = string1 => {
  console.log(`${string1} Minhas skills sao ${skills[1]}, ${skills[4]}, ${skills[0]}, ${skills[2]}, ${skills[3]}`)
}

addSkills(replaceX('Tryber x aqui!','Bebeto'))