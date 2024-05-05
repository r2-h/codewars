var countBits = function(n) {
    const two = n.toString(2)
    let res = 0
    for (const el of two) {
      if (el === '1') {
        res += 1
      }
    }
  return res
};
