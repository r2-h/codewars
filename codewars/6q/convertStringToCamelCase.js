function toCamelCase(str){
  if (str.length === 0) {
    return ''
  }
  let splitted = str.replaceAll('_', ' ').replaceAll('-', ' ').split(' ')
 
  return splitted.reduce((acc, el, i) => {
    if (i === 0) {
      return acc + el[0] + el.slice(1).toLowerCase()
    }
    return acc + el[0].toUpperCase() + el.slice(1).toLowerCase()
  }, '')
}
