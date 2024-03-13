const nums = [6, 1, 2, 4, 3, 4, 5, 6];
const duplicates = [];

for (let i = 0; i < nums.length; i++) {
  const index = nums[i];
  console.log(index);
  // If the value at index is negative, it means it has already been seen
  if (nums[index] < 0) {
    duplicates.push(index);
  } else {
    nums[index] = -nums[index];
  }
}
console.log(duplicates);
