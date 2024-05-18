var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  const res = []
  for (let i = 0; i < iterable.length; i += 1) {
    if (iterable[i] !== iterable[i + 1]) {
      res.push(iterable[i])
    }
  }
  return res
}
