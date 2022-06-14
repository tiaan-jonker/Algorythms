const binarySearch = require('./index')

test('binarySearch is a function', () => {
  expect(typeof binarySearch).toEqual('function')
})

test('binarySearch returns true when target is in arr', () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]
  const n = 15
  expect(binarySearch(arr, n)).toEqual(true)
})
