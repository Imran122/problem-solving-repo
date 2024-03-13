const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] === array[i + 1]) {
    uniqueArray.push(array[i]);
  }
}
console.log(uniqueArray);
