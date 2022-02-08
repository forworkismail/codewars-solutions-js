const solution = (input, markers) => {
  if (markers.length > 0 && input.length > 0) {
    let markerRegex = new RegExp(`[${markers.join("")}]`);
    const arr = input.split('\n');

    for (let i = 0; i < arr.length; i++) {
      let result = "";
      for (let j = 0; j < arr[i].length; j++) {
        if (markerRegex.test(arr[i][j])) {
          break;
        } else {
          result += arr[i][j];
        }
      }
      arr[i] = result.trim();
    }
    return arr.join('\n');
  }
  return 0;
}

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])