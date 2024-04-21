function dnaStrand(dna){
  const obj = {
    A: 'T', T: 'A', C:'G', G: 'C'
  }
 let result = ''
 for (const word of dna) {
   result += obj[word]
 }
  return result
}
