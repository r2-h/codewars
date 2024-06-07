function longestConsec(strarr, k) {
    let letters = ''
    if (strarr.length < k) return ''
    
    for (let i = 0; i < strarr.length; i += 1) {
      let current = ''
      for (let j = 0; j < k; j += 1) {
        if (strarr[i + j] != undefined) {
             current += strarr[i + j]
        }     
      }
      if (current.length > letters.length) {
        letters = current
      }
    }
  return letters
}
