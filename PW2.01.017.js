let nums = [0, 1, 0, 3, 2, 0, 5];
let newNums = nums.sort((a, b) => a - b);
console.log("first", newNums);

let nonZeroIndex = 0;

for (let i = 0; i < newNums.length; i++) {
  if (newNums[i] !== 0) {
    // If the current element is non-zero, move it to the nonZeroIndex position
    newNums[nonZeroIndex] = newNums[i];
    nonZeroIndex++;
  }
}

// Fill the remaining elements with zeros from nonZeroIndex onwards
for (let i = nonZeroIndex; i < newNums.length; i++) {
  newNums[i] = 0;
}

console.log(newNums);
