function findMissingLetter(array) {
  const numbers = array.map((el, i) => el.charCodeAt())
 
  let number 
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] + 1 !== numbers[i + 1]) {   
      number = numbers[i] + 1
      break
    }
  }

  return String.fromCharCode(number)
}
