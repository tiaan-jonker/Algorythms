// Binary search
// search time: O(log(n))

// Brute force on the other hand
// search time: O(n)

// Binary steps:
// 1. start with the middle number, is it smaller or bigger than target?
// 2. this will tell us if the target is in the first or second half
// 3. now the problem is divided in half ruling out the half that doesn't have the target
// 4. repeat the same approach until the whole set is ruled out

function binarySearch(nums, target) {
  // Think of start / end as the walls around
  // possible answers
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  // If there isn't at least 1 index between floor and ceiling,
  // we've run out of guesses and the number must not be present
  while (floorIndex + 1 < ceilingIndex) {

    // Find the index ~halfway between the floor and ceiling
    // We have to round down, to avoid getting a "half index"
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;

    const guessValue = nums[guessIndex];

    if (guessValue === target) {
      return true;
    }

    if (guessValue > target) {

      // Target is to the left, so move ceiling to the left
      ceilingIndex = guessIndex;
    } else {

      // Target is to the right, so move floor to the right
      floorIndex = guessIndex;
    }
  }

  return false;
}

module.exports = binarySearch
