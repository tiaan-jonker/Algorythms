function reverseChars(message) {
  while (leftIdx < rightIdx) {
    let temp = message[leftIdx]
    message[leftIdx] = message[rightIdx]
    message[rightIdx] = temp

    leftIdx++
    rightIdx--
  }
}
