const myFizzBuzz = require('./myFizzBuzz.js')

it('returns fizzbuzz when myFizzBuzz(15)', () => {
  expect(myFizzBuzz(15)).toEqual('fizzbuzz');
})

it('returns fizz when myFizzBuzz(9)', () => {
  expect(myFizzBuzz(9)).toEqual('fizz');
})

it('returns buzz when myFizzBuzz(10)', () => {
  expect(myFizzBuzz(10)).toEqual('buzz');
})

it('returns 4 when myFizzBuzz(4)', () => {
  expect(myFizzBuzz(4)).toEqual(4);
})

it('returns false when myFizzBuzz("4")', () => {
  expect(myFizzBuzz("4")).toEqual(false);
})