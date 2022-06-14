function linear(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (n === arr[i]) {
      return 1
    }
  }
  return -1
}

module.exports = linear