function moveZeros(arr) {
  let zerosList = [];
  let nonZerosList = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zerosList.push(0);
    } else {
      nonZerosList.push(arr[i]);
    }
  }
  return nonZerosList.concat(zerosList);
}