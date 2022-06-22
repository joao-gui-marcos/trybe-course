const newEmployees = (func) => {
  const employees = {
    id1: func('pedro'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('luiza'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('carla'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const createEmployee = (name) => {
  const newPerson = {
    nomeCompleto: name,
    email: `${name}@trybe.com`,
  }
  return newPerson
}

console.log(newEmployees(createEmployee))



