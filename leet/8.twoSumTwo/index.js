function twoSum(arr, t) {
  let i = 0
  let j = arr.length - 1

  while (i < j) {
    let sum = arr[i] + arr[j]

    if (sum === t) {
      return [i + 1, j + 1]
    } else if (sum < t) {
      return i++
    } else {
      j--
    }
  }

  return [-1, -1]
}
