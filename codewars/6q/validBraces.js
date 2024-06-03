function validBraces(braces){
  const bracesObj = {'(': ')', '[': ']', '{': '}'}
  const stack = []

  for (const char of braces) {
    if (Object.keys(bracesObj).includes(char)) {
      stack.push(char)
    } else {
      if (stack.length === 0 || char!== bracesObj[stack.pop()]) {
        return false
      }
    }
  }
  return stack.length === 0
}
