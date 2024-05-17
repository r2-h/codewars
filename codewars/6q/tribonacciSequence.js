function tribonacci(signature,n){
  //your code here
  if (n === 0) {
    return []
  } else if (n === 1) {
    return [signature[0]]
  } else if (n == 2) {
    return signature.slice(0, 2)
  }
  
  const res = signature
  for (let i = 3; i < n; i += 1) {
    res[i] = res[i - 1] +  res[i - 2] +  res[i - 3]
  }

  return res
}
