const array = [1, 2, 3, 4, 4, 5, 6, 6];

const uniqueArray = array.filter((value, index) => {
  return array.indexOf(value) === index;
});

console.log(uniqueArray);
