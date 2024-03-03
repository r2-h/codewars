


function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  const result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key]);
    }
  }

  return result;
}

console.log(9)
const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {value: 3}
      ]
    },
    {
      value: 4,
      children: [
        {value: 5},
        {value: 6},
      ]
    }
  ]
}

// function getTreeValues(tree) {
//   const stack = [tree]
//   const res = []
//
//   while (stack.length > 0) {
//     const node = stack.pop()
//     if (node.value !== undefined) {
//       res.push(node.value)
//     }
//     if (node.children?.length) {
//       stack.push(...node.children)
//     }
//   }
//
//   return res
//
// }
// console.log(getTreeValues(tree))


// TS --------------------------------------------------------------------------------------------------------------
const X = {a: 1, b: 2, c: 3, d: 4}

function getProperty(obj, key) {
  return obj[key]
}

getProperty(X, 'a')
getProperty(X, 'm')
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }


// debounce -------------------------------------------------------
// const tick = (time) => {
//   return new Promise(res => setTimeout(res, time))
// }
// const debounce = (func, wait) => {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(this, args);
//     }, wait);
//   };
// };
//
//
// const printNumber = (number) => {
//   console.log(number)
// }
//
// const debouncedFn = debounce(printNumber, 1000)
//
// const testFunction = async () => {
//   debouncedFn(1)
//   debouncedFn(2)
//   await tick(500)
//   debouncedFn(3)
//
//   await tick(1000)
//
//   debouncedFn(4)
// }
//
// testFunction()


// Map-------------------------------------------------------------------------------------
// let map=new Map()
// map.set([],1)
// map.set([],2)
// console.log(map.size)
// console.log(map.get([]))
// let f = function(){}
// map.set(f,3)
// map.set(f,4)
// console.log(map.size)
// console.log(map.get(f))


// const map = new Map()
// map.set('0', '1')
// map.set('s2', '2s')
// map.set('3s', 's3')
// const arr = [...map.values()]
// const res = arr.map(val => parseInt(val, 10))


// generator --------------------------------------------------------------------

// function* genereteNumber () {
//   yield 2
// }
//
// const gen = genereteNumber()
//
// console.log(gen.next())
