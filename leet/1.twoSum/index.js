// Brute force solution
// Time complexity of O(n^2) because trying to find compliment by looping through rest of arr
// Space complexity of O(1) space does not depend on the size of input arr

function twoSum(arr, target) {
  let length = arr.length
  let result = []

  for (let i = 0; i < length; i++) {
    let currNum = arr[i]
    for (let j = i + 1; j < length; j++) {
      let nextNum = arr[j]

      if (currNum + nextNum === target) {
        result = [i, j]
      }
    }
  }

  return result || null
}

// Hashmap
// Faster solution is to use a hash table => trading space for speed.

function twoSumHash(arr, target) {
  let length = arr.length
  let hashmap = new Map()

  for (let i = 0; i < length; i++) {
    hashmap.set(arr[i], i)
  }

  for (let i = 0; i < length; i++) {
    let compliment = target - arr[i]
    if (hashmap.has(compliment) && hashmap.get(compliment) !== i) {
      return [i, hashmap.get(compliment)]
    }
  }

  return hashmap || null
}

// Learnings:
// can use brute force to loop through arr checking the currNum and nextNum but at cost of speed
// map can be used instead to increase speed at cost of space
// loop thought setting the currNum and index to the map
// check for the compliment where target - arr[i]
// if that compliment is in the arr and its not the same element currently looped through
// then return the current i and the compliment index
