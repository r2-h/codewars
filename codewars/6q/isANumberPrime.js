function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;

  if (num % 2 === 0) return false;

  let sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
