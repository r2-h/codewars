function duplicateCount(text){
  const obj = {}
  for (const letter of text) {
    const key = letter.toLowerCase()
    if (obj[key]) {  
      obj[key] += 1
    } else {
      obj[key] = 1
    }
  }
  return Object.keys(obj).filter(key => obj[key] > 1).length
}
