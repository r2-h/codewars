function firstNonRepeatingLetter(s) {
 const lower = s.toLowerCase()
 for (let i = 0; i < s.length; i += 1) {
   const char = lower[i]
   if (lower.indexOf(char) === lower.lastIndexOf(char)) {
     return s[i]
   }
 }
  return '';
}
