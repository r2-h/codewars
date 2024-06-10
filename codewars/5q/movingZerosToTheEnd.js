function moveZeros(arr) {
  const filtered = arr.filter(el => el === 0)
  return arr.filter(el => el !== 0).concat(filtered)
}
