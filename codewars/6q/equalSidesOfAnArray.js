function findEvenIndex(arr) { 
  for (let i = 0; i < arr.length; i += 1) {
    const arrLeft = arr.slice(0, i)
    const arrRight = arr.slice(i + 1)
    
    const leftSum = getSum(arrLeft)
    const rightSum = getSum(arrRight)
    if (leftSum === rightSum) {
      return i
    }
 
  }
  return -1
}

function getSum(arr) {
  return arr.reduce((acc, num) => acc += num,0)
}
