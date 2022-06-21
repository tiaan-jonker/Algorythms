function palindrome(s) {
  let sanitisedStr = s.replace(/[\W_]+/g, '').toLowerCase()

  let start = 0
  let end = sanitisedStr.length - 1
  let count = 0

  while (start < end) {
    if (sanitisedStr[start] !== sanitisedStr[end]) {
      count++
    }

    if (count) {
      return false
    }

    start++
    end--
  }

  return true
}
