function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const squareRoot = Math.sqrt(sq);
  if (Number.isInteger(squareRoot)) {
    return Math.pow(squareRoot + 1, 2);
  }
  return -1;
}