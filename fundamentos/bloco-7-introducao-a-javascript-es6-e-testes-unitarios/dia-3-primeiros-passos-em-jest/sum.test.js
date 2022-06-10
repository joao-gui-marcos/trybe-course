const { exportAllDeclaration } = require('@babel/types')
const sum = require('./sum.js')

it('returns 9 when sum(4,5)', () => {
  expect(sum(4,5)).toBe(9);
})

it('returns 0 when sum(0,0)', () => {
  expect(sum(0,0)).toBe(0)
})

it('throw error when sum(4,"5")', () => {
  expect(() => sum(4,"5")).toThrow(Error)
})

it('throw error when sum(4,"5")', () => {
  expect(() => sum(4,"5")).toThrow('parameters must be numbers')
})