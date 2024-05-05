function generateHashtag (str) {
  if (!str.replace(/ /g, '')) {
    return false
  }
 const newStr =  str.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('')
 return newStr.length >= 140 ? false : `#${newStr}`
}
