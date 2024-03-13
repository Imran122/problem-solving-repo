const nums = [6, 1, 2, 4, 3, 4, 5, 6];
const duplicates = [];

for (let i = 0; i < nums.length; i++) {
  const index = Math.abs(nums[i]) - 1;
  console.log(index);
  // If the value at index is negative, it means it has already been seen
  if (nums[index] < 0) {
    duplicates.push(index + 1);
  } else {
    nums[index] = -nums[index];
  }
}
console.log(duplicates);
