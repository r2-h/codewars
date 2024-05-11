function alphabetPosition(text) {
  const alph = ' abcdefghijklmnopqrstuvwxyz'
  
  const res = []
  for (const el of text) {
    if (el !== ' ') {
      if (alph.includes(el.toLowerCase())) {
        res.push(alph.indexOf(el.toLowerCase()))
      }
    }
  }
  return res.join(' ')
}
