function cakes(recipe, available) {
  let arr = []
  for (const key of Object.keys(recipe)) {
    if (!available[key]) {
      return 0
    } else {
      arr.push(available[key] / recipe[key])
    }  
  }
  return Math.floor(Math.min(...arr))
}
