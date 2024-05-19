function digPow(n, p){
  const numbersArr = String(n).split('').map(Number) 
  const  divisible = numbersArr.reduce((acc, num, i) => acc += num ** (p + i), 0)  
  return divisible % n === 0 ? 
    divisible / n :  -1
}
