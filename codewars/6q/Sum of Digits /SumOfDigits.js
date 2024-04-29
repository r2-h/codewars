function digitalRoot(n) {
  if (n < 10) {
    return Number(n)
  }
  const numbersArray = String(n).split('').map(num => Number(num))
  const newNumber =  numbersArray.reduce((acc, el) => acc += el, 0)
  return digitalRoot(newNumber)
}
