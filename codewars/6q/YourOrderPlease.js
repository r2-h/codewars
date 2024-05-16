function order(words){ 
  const splitted = words.split(' ')
  
  return splitted.sort((a, b) => {
    const numA = Number(a.match(/\d+/g))
    const numB = Number(b.match(/\d+/g))    
    return  numA -  numB
  }).join(' ')
}
