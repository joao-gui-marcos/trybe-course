const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const hof = (right, student, func) => func(right,student)


const checkAnswers = (array1, array2) => {
  let score = 0
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] === array2[i]) {
      score += 1
    } else if (array2[i] !== 'N.A') {
      score -= 0.5
    }
  }
  return score
}

console.log(hof(RIGHT_ANSWERS,STUDENT_ANSWERS,checkAnswers))