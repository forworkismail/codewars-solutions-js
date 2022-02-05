function alphabetPosition(text) {
  if (typeof text === 'string') {
    text = text.toLowerCase();
    output = "";
    for (let i = 0; i < text.length; i++) {
      if (/^[a-z]+$/.test(text[i])) {
        output = `${output} ${text[i].charCodeAt() - 96}`;
      }
    }
    return output.trim();
  }
  return "";
}