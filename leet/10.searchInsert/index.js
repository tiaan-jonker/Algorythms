// first solution
// runtime is 72ms 
function searchInsert(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const guess = list[mid]

    if (guess === item) {
      return mid
    }

    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  for (let i = 0; i < list.length; i++) {
    if (item < list[i]) {
      return 0
    } else if ((list[i] < item && list[i + 1] > item) || !list[i + 1]) {
      return i + 1
    }
  }
}

// alternative solution
// runtime is 66ms
function searchInsertAlt(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const guess = list[mid]

    if (guess === item) {
      return mid
    }

    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return low
}
