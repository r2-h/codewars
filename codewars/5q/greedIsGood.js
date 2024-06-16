function score( dice ) {
  // Fill me in!
  let res = 0
  const obj = {}
  for (const el of dice) {
    obj[el] = (obj[el] || 0) + 1
  }
  for (const key of Object.keys(obj)) {
    if (obj[key] >= 3) {
      if (key === '1') {
        res += 1000 + (obj[key] - 3) * 100
      }
      if (key === '6') {
        res += 600 
      }
      if (key === '5') {
        res += 500 + (obj[key] - 3) * 50
        }
      if (key === '4') {
        res += 400 
      }
      if (key === '3') {
        res += 300 
      }
      if (key === '2') {
        res += 200 
      }
    } else {
      if (key === '1') {
        res += obj[key] * 100
      }
      if (key === '5') {
        res += obj[key] * 50
      }
    }
  }
  return res
}
