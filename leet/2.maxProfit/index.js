// Brute force 

function maxProfit (arr) {
  let length = prices.length

  let maxProfit = 0

  for (let i = 0; i < length; i++) {
    let currNum = prices[i]
    for (let j = i + 1; j < length; j++) {
      let nextNum = prices[j]
      let potentialProfit = nextNum - currNum

      if (potentialProfit > 0) {
        maxProfit = Math.max(maxProfit, potentialProfit)
      }
    }
  }

  
  return maxProfit
}

function maxProfitAlt (prices) {
  if (prices.length < 2) return 0
  
  let minPrice = prices[0]
  let maxProfit = prices[1] - prices[0]

  for (let i = 0; i < prices.length; i++) {
    const currPrices = prices[i]
    const potentialProfit = currPrices - minPrice
    maxProfit = Math.max(maxProfit, potentialProfit)
    minPrice = Math.min(minPrice, currPrices)
  }

  return maxProfit
}