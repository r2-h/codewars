function orderWeight(strng) {
  const numbers = strng.split(' ')

  numbers.sort((a, b) => {
    const weightA = a.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0)
    const weightB = b.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0)

    if (weightA!== weightB) {
      return weightA - weightB; 
    } else {
      return a.localeCompare(b); 
    }
  });


  return numbers.join(' ');
}
