// function squareDigits(num) {
//  let returnStr = "";
//  const strArray = String(num).split("");
//   strArray.forEach(
//     (number) => (returnStr = returnStr.concat(Math.pow(number, 2)))
//   );
//   return Number(returnStr);
// }

function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((n) => Math.pow(n, 2))
      .join("")
  );
}

//9119
//811181

console.log(squareDigits(9119));
