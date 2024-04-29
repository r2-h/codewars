function rgb(r, g, b) {
  
  const normalize = (num) => {
    if (num < 0) {
      return '00'
    }
    if (num > 255) {
      return 'FF'
    }
    return num.toString(16).padStart(2, '0').toUpperCase()
  }

    return `${normalize(r)}${normalize(g)}${normalize(b)}`
}
