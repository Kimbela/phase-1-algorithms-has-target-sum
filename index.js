function hasTargetSum(array, target) {
  const visitedNumbers = [];

  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    const difference = target - currentNumber;

    if (visitedNumbers.includes(difference)) {
      return true;
    }

    visitedNumbers.push(currentNumber);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
//The time complexity of the hasTargetSum function is O(n), where n is the size of the input array.

/* 
  Add your pseudocode here
  1.Initialize an empty array called visitedNumbers to keep track of visited numbers.
  2.Iterate through each number in the array:
For each number:
Calculate the difference between the target and the current number, and store it in a variable called difference.
Check if the difference exists in the visitedNumbers array using the includes method.
If the difference exists, return true because we have found a pair of numbers that sum up to the target.
If the difference does not exist, add the current number to the visitedNumbers array.
3.If no pair of numbers that sum up to the target is found after iterating through the entire array, return false
*/

/*
  Add written explanation of your solution here
  1.Initialize an empty array to keep track of visited numbers.
  2.Iterate through each number in the array.
  3.For each number, calculate the difference between the target and the current number.
  4.Check if the difference exists in the visited numbers array.
  5.If the difference exists, it means we have found a pair of numbers that sum up to the target. Return true
  6.If the difference does not exist, add the current number to the visited numbers array.
  7.If no pair of numbers that sum up to the target is found after iterating through the entire array, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
