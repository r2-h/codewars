function isValidWalk(walk) {
  //insert brilliant code here
  console.log(walk)
  if (walk.length !== 10) {
    return false
  }
  let x = 0
  let y = 0
  for (const dir of walk) {
    if (dir === 'n') {
      x += 1
    } 
    if (dir === 's') {
      x -= 1
    } 
    if (dir === 'w') {
      y -= 1
    } 
    if (dir === 'e') {
      y += 1
    } 
  }
  if (x === 0 && y === 0) {
    return true
  } else {
    return false
  }
}
