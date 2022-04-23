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
