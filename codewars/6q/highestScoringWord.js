function high(x){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let biggest = 0
  let result
  const mapped = x.split(' ').map(el => {    
    const sum = el.split('').reduce((acc, letter) => acc + alphabet.indexOf(letter) + 1, 0)
    if (sum > biggest) {
      biggest = sum
      result = el
    }

  })
  return result
}
