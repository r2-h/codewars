function solution(string) {
  let str =''
  for (let el of string) {
    if (el === el.toUpperCase()) {
      str += ` ${el}`
    } else {
      str += el
    }
  }
  return str
}
