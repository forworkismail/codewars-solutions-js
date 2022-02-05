function digital_root(n) {
  if (Number.isInteger(n)) {
    if (n < 10) return n;

    sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return digital_root(sum);
  } else {
    return 0;
  }
}

function digital_root_formula(n) {
  return (n - 1) % 9 + 1;
}