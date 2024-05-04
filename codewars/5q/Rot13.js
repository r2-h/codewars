function rot13(message){
  const alph = 'abcdefghijklmnopqrstuvwxyz'
  const upperAlph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const res = []
  for (const el of message) {

   if (/[^a-zA-Z]/.test(el)) {  
      res.push(el)
    }
    
    if (alph.includes(el)) {
      const idx = alph.indexOf(el)
      const newIdx =  (idx + 13) % alph.length
      res.push(alph[newIdx])
    } else if (upperAlph.includes(el)) {
      const idx = upperAlph.indexOf(el)
      const newIdx =  (idx + 13) % upperAlph.length
      res.push(upperAlph[newIdx])
    }
    
  }
  return res.join('')
}
