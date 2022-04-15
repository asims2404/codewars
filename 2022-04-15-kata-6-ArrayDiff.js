/* function arrayDiff(a, b) {
  const newArr = [];
  a.forEach((number) => {
    if (!b.includes(number)) newArr.push(number);
  });
  return newArr;
} */

const arrayDiff = (a, b) => {
  const checkMatchWithB = checkMatch(b);
  return a.filter(checkMatchWithB);
};

const checkMatch = (arr) => {
  return (number) => {
    return !arr.includes(number);
  };
};

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2], [1]));

// It should remove all values from list a, which are present in list b
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// arrayDiff([1,2],[1]) == [2]
