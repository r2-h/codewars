function scramble(str1, str2) {
  if (str1.length < str2.length) return false;
  
  const count = {};

  for (const letter of str2) {
    count[letter] = (count[letter] || 0) + 1;
  }

  for (const letter of str1) {
    if (count[letter]) {
      count[letter]--;
      if (count[letter] === 0) {
        delete count[letter];
      }
    }
  }

  return Object.keys(count).length === 0;
}
