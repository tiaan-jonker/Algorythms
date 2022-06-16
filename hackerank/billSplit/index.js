function billSplit(bill, k, b) {
  let result = ''
  // this will mutate the array, cutting k out
  bill.splice(k, 1)
  const billCost = bill.reduce((acc, prev) => acc + prev, 0) / 2
  
  if (billCost === b) {
    result = 'Bon Appetite'
  } else {
    result = b - billCost
  }

  console.log(result)
}

// in this instance bill.slice(k, 1) will not work
// array.slice(startIdx, endIdx)