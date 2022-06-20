function duplicates(arr) {
  const length = arr.length
  let arrSet = new Set()

  for (let i = 0; i < length; i++) {
    let currNum = arr[i]
    
    if (arrSet.has(currNum)) {
      arrSet.delete(currNum)
    } else {
      arrSet.add(currNum)
    }
  }

  if (arrSet.size < length) {
    return true
  }

  return false
}

// Single line

function duplicateShort(arr) {
  return new Set(arr).size !== arr.length
} 