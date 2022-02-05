function printerError(s) {
  // your code
  errors = 0;
  for (let i = 0; i < s.length; i++) {
    if (!/^[a-m]+$/.test(s[i])) {
      errors += 1;
    }
  }

  return `${errors}/${s.length}`;
}