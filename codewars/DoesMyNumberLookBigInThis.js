function narcissistic(value) {
  // Code me to return true or false
  if (value < 10) {
    return true
  }
  const splitted = String(value).split('').map(Number)
  const res = splitted.reduce((acc, el) => {   
    acc += Math.pow(el,  splitted.length)
    return acc
  }, 0)
  return res === value
}
