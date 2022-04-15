const modulusResult = (number, mod) => number % mod;

function solution(number) {
  let sum = 0;
  for (let i = number - 1; i > 0; i--) {
    if (!modulusResult(i, 5) || !modulusResult(i, 3)) sum += i;
  }
  return sum;
}

console.log(solution(10));
