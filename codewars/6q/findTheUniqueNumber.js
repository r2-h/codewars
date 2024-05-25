function findUniq(arr) {
  // do magic
 if (arr[0] === arr[1]) {
   return arr.filter(num => num !== arr[0])[0]
 } else {
    return arr.filter(num => num !== arr[2])[0]
 }   
}
