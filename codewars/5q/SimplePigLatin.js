function pigIt(str){

  return str.split(' ')
    .map(el => { 
       console.log(el)
     if (/[^0-9a-zA-Z]/.test(el)) {
       return el
      }
    
      const arr =  el.split('')
      const f = arr.shift()
      arr.push(f, 'ay')    
      return arr.join('') 
  }).join(' ')  
}
