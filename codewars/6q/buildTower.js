function towerBuilder(nFloors) {
  const res = []
  let j = nFloors
  for (let i = 0; i < nFloors; i += 1) {
    j -= 1
    const row = ['*']
    const rightSide = `${('*').repeat(i)}${(' ').repeat(j)}`
    const leftSide = `${(' ').repeat(j)}${('*').repeat(i)}`
    row.push(rightSide)
    row.unshift(leftSide)
    
    res.push(row.join(''))
  }
  return res
}
