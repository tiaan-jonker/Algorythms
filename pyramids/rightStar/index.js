function rightStar(n) {
  let output = ""

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      output += "#"
    }
    output += "\n"
  }

  for (let i = 1; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      output += "#"
    }
    output += "\n"
  }

  console.log(output)
}