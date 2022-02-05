function accum(s) {
  // your code
  if (s.length != 0) {
    let output = '';
    for (let i = 0; i < s.length; i++) {
      let j = 0;
      while (j < i + 1) {
        output += j === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
        j++;
      }
      output += "-";
    }
    return output.substring(0, output.length - 1);
  }
  return '';

}