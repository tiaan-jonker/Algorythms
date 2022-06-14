function rotationPoint(arr) {
  const firstWord = arr[0]

  let start = 0;
  let end = arr.length - 1

  while (start < end) {
    const midPoint = Math.floor(start + ((end - start) / 2))

    if (arr[midPoint] >= firstWord) {
      start = midPoint
    } else {
      end = midPoint
    }

    if (start + 1 === midPoint) {
      break
    }
  }
}