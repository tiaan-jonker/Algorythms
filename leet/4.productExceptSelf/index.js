// My solution. Time limit exceeded. 
function productExceptSelf(arr) {
  const length = arr.length
  let count = 0
  let resultArr= []

  while (count < length) {
    let result = 1
    let tempArr = []

    for (let i = 0; i < length; i++) {
      if (i !== count) {
        tempArr.push(arr[i])
      }
    }

    for (let i = 0; i < tempArr.length; i++) {
      result *= tempArr[i]
    }

    resultArr[count] = result
    count++
  }

  return resultArr
}

// Alternative 
// check: https://www.youtube.com/watch?v=XkKmR7RANLY