function solution(str){
   
   const result  = []
   for (let i = 0; i < str.length; i += 2) {
     if (str[i + 1]) {
       result.push(str.slice(i, i + 2))
     } else {
       result.push(str[i] + '_')
     }
   }
  return result
}
