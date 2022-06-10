const myRemove = require('./myRemove.js')

it('returns [1, 2, 4] when myRemove([1, 2, 3, 4], 3)', () => {
  expect(myRemove([1, 2, 3, 4],3)).toEqual([1, 2, 4]);
})

it('does not return [1, 2, 3, 4] when myRemove([1, 2, 3, 4], 3)', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual( [1, 2, 3, 4]);
})

it('does not return [1, 2, 3, 4] when myRemove([1, 2, 3, 4], 3)', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual( [1, 2, 3, 4]);
})