function isValid(s) {
  const length = s.length

  if (length % 2 !== 0) return false

  let stack = []
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ])

  for (let i = 0; i < length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]))
    } else if (s[i] !== stack.pop())
      return false
  }

  return stack.length === 0
}
