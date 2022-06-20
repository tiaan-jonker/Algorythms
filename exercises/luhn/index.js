function luhn(ccNumber) {
  const length = ccNumber.length
  let count = 0

  for (let i = 0; i < length; i++) {
    let currNum = parseInt(ccNumber[i])
    if ((i + 1) % 2 === 0) {
      if ((currNum * 2) > 9) {
        currNum = 1 + (currNum % 10)
      }
    }
    count += currNum
  }

  return (count % 10) === 0
}