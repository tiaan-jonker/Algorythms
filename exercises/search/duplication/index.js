function duplication(arr) {
  const numberSeen = new Set()

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (numberSeen.has(num)) {
      return num
    }
    numberSeen.add(num)
  }

  throw new Error('no duplicate')
}