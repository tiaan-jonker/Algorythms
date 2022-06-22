// Naive solution
function squareSorted(arr) {
  const n = arr.length - 1
  let resultArr = []

  for (let i = 0; i < n; i++) {
    resultArr.push(arr[i] ** 2)
  }

  return resultArr.sort((a, b) => a - b)
}

// O(n) solution
function squareSortedAlt(arr) {
  const n = arr.length - 1
  let resultArr = []
  let left = 0
  let right = n

  for (let i = n; i >= 0; i--) {
    const squared = 0
    if (Math.abs(arr[right]) > Math.abs(arr[left])) {
      squared = arr[right]
      right--
    } else {
      squared = arr[left]
      left++
    }
    result[i] = squared * squared
  }

  return resultArr
}
