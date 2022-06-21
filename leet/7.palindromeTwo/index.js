function validPalindrome(s) {
  function checkPalindrome(s, i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false
      }

      i++
      j++
    }

    return true
  }

  let i = 0
  let j = s.length - 1

  while (i < j) {
    if (s[i] !== s[j]) {
      const p1 = checkPalindrome(s, i + 1, j)
      const p2 = checkPalindrome(s, i, j - 1)

      if (p1 || p2) {
        return true
      } else {
        return false
      }
    }

    i++
    j--
  }

  return true
}
