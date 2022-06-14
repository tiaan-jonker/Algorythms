const { exportAllDeclaration } = require('@babel/types')
const linear = require('./index.js')

test('linear is a function', () => {
  expect(typeof linear).toEqual('function')
})

test('linear to return i when num in arr', () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]
  const n = 5
  expect(linear(arr, n)).toEqual(1)
})