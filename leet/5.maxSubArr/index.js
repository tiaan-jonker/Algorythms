// Brute force solution

function maxSubArr(arr) {
  const length = arr.length
  let maxSubArr = 0

  for (let i = 0; i < length; i++) {
    let currSubArr = 0
    for (let j = i; j < length; j++) {
      // add
      currSubArr += arr[i]
      // then check setting to max of curr tally or prev tally
      maxSubArr = Math.max(maxSubArr, currSubArr)
    }
  }

  return maxSubArr
}

// Alternative

function maxSubArrAlt(arr) {
  const length = arr.length
  let currSubArr = arr[0]
  let maxSubArr = arr[0]

  for (let i = 1; i < length; i++) {
    let currNum = arr[i]
    currSubArr = Math.max(currNum, currSubArr + currNum)
    maxSubArr = Math.max(maxSubArr, currSubArr)
  }

  return maxSubArr
}

function maxSubArrAltTwo(arr) {
  const length = arr.length
  let solution = arr[0]

  for (let i = 1; i < length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1])
    solution = Math.max(solution, arr[i])
  }

  return solution
}
