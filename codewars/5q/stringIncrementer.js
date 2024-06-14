function incrementString (strng) {
  let numberStr = ''
  let i = strng.length - 1
  while (/[0-9]/.test(strng[i])) { 
    numberStr = strng[i] + numberStr
    i--
  }
  const numberPlusOne = Number(numberStr) + 1
  const end = String(numberPlusOne).padStart(numberStr.length, 0)
  return strng.slice(0, i + 1) + end
  
}
