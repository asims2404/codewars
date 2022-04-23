const arrayDiff = (a, b) => a.filter(checkMatch(b));

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
