
function pigIt(str) {
  //Code here
  const words = str.split(" ");
  let output = "";
  words.forEach((word) => {
    output = `${output} ${/^[a-z]+$/i.test(word) ? modifyString(word) : word}`
  })
  return output.trim();
}

function modifyString(str) {
  const firstChar = str.charAt(0);
  str = str.substr(1);
  return `${str}${firstChar}ay`;
}