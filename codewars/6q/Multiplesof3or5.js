function solution(number){
 let res = 0
 for (let i = 3; i < number; i += 1) {
   if (i % 3 === 0 && i % 5 === 0) {
     res += i
   } else if (i % 3 === 0) {
     res += i
   }
   else if (i % 5 === 0) {
     res += i
   }
 }
  return res
}
