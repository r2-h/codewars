function persistence(num) {
  if (num >= 0 && num < 10) {
    return 0
  }
  
  let numsArray = String(num).split('')
  let count = 0
  
  while (numsArray.length > 1) {
    numsArray = multiple(numsArray)    
    count += 1
  }
  return count
}

function multiple(numsArray) {
  let sum = 1
  for (const num of numsArray) {
    sum *= Number(num)
  }
  return String(sum).split('')
}
