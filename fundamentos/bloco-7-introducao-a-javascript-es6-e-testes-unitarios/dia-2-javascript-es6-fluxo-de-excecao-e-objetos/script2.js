const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addNightShift (lesson,key,value) {
  lesson[key] = value
}

addNightShift(lesson2,'turno','noite')

function listObjKeys(obj) {
  console.log(Object.keys(obj))
}

function showObjSize(obj) {
  console.log(Object.keys(obj).length)
}

function listObjValues(obj) {
  console.log(Object.values(obj))
}

listObjKeys(lesson2)
showObjSize(lesson2)
listObjValues(lesson2)

const allLessons = Object.assign({},{lesson1,lesson2,lesson3})

//console.log(Object.entries(allLessons))

function showTotalStudents(obj) {
  console.log(obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes)
}

showTotalStudents(allLessons)

function getValueByNumber(obj,num) {
  return Object.values(obj)[num]
}

console.log(getValueByNumber(lesson1, 0))

function verifyPair(obj,key,value) {
  for (let i = 0; i < Object.entries(obj).length; i += 1) {
    if (Object.entries(obj)[i][0] == key) {
      if (Object.entries(obj)[i][1] == value) {
        return true
      }
    }
  }
  return false
}

console.log(verifyPair(lesson3, 'turno', 'noite')); // Output: true

console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); // Output: false