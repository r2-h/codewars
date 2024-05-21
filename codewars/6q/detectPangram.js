function isPangram(string){
  const alphebet = 'abcdefghijklmnopqrstuvwxyz'
  
  for (const word of alphebet) {
    if (!string.toLowerCase().includes(word) ) {
      return false
    }
  }
  return true
}
