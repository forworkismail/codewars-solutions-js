function persistence(num) {
  if (Number.isInteger(num) && num > 10) {
    nextNum = num;
    multiply = 1;
    steps = 0;
    while (num >= 10) {
      multiply *= nextNum % 10;
      nextNum = Math.floor(nextNum / 10);
      if (nextNum === 0) {
        nextNum = multiply;
        num = nextNum;
        multiply = 1;
        steps++;
      }
    }
    return steps;
  }
  return 0;
}