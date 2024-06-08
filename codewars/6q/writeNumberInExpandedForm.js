function expandedForm(num) {
  // Your code here
  const res = []
  
  const strNumber = String(num)
  
  for (let i = 0; i < strNumber.length; i += 1) {
    const current = strNumber.slice(i)
    if (current[0] !== '0') {
      res.push(current[0] * Math.pow(10, strNumber.length - 1 - i))
    }
  }
  return res.join(' + ')
}
