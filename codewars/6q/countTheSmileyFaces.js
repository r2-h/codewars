function countSmileys(arr) {
  const faces = /^[;:][~-]?[D)]?$/
  let res = 0
  arr.forEach((el) => {
    if (faces.test(el)) {
      res += 1
    }
  })
  return res
}
