function rot13(message) {
  if (message.length > 0) {
    output = '';
    for (let i = 0; i < message.length; i++) {
      if (/^[a-z]+$/i.test(message[i])) {
        let charCode = message[i].charCodeAt();
        let maxCharCode = /^[a-z]+$/.test(message[i]) ? 122 : 90;
        output += charCode + 13 > maxCharCode ? String.fromCharCode(charCode - 13) : String.fromCharCode(charCode + 13)
      } else {
        output += message[i];
      }
    }
    return output;
  }
  return "";
}