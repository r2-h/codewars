function bubble(arr) {
  const res = []
  const length = arr.length
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length ; j += 1) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        res.push([...arr])
      }
    }
  }
  return res
}
