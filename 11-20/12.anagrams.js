function anagrams(word, words) {
  return words.filter(function (x) {
    return sort(x) === sort(word);
  });
}
function sort(str) {
  return str.split("").sort().join("");
}