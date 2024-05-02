// custom bind

// const bind = () => {}
// const person = {
//   name: "Ivan",
// }
// function getName(lastName) {
//   return this.name + " " + lastName
// }
// const bindedFn = bind(getName, person)
// console.log(bindedFn("Ivanov")) // Ivan Ivanov


// deepCopy ---------------------------------------------------------------------------------------

// function deepCopy(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj
//   }
//
//   if (Array.isArray(obj)) {
//     return obj.map(deepCopy)
//   }
//
//   const result = {}
//   for (let key of Object.keys(obj)) {
//     result[key] = deepCopy(obj[key])
//   }
//
//   return result
// }

// const tree = {
//   value: 1,
//   children: [
//     {
//       value: 4,
//       children: [{value: 5}, {value: 6}],
//     },
//   ],
// }


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
// }
//
// console.log(getTreeValues(tree))


// TS ----------------------------------------------------------------------------------

// const X = {a: 1, b: 2, c: 3, d: 4}
//
// function getProperty(obj, key) {
//   return obj[key]
// }
// getProperty(X, "a")
// getProperty(X, "m")

/*function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}*/


// debounce ----------------------------------------------------------------------------

// const tick = (time) => {
//   return new Promise(res => setTimeout(res, time))
// }
// const debounce = () => {}
//
// const printNumber = (number) => {
//   console.log(number)
// }
//
// const debouncedFn = debounce(printNumber, 1000)
//
// const testFunction = async () => {
//   debouncedFn(1) // не вызовется потому что после вызова нет задержки
//   debouncedFn(2) // вызовется потому что после вызова есть задержка 1000
//   await tick(1200)
//   debouncedFn(3)  // не вызовется потому что после вызова задержка меньше переданной
//   await tick(600)
//   debouncedFn(4) // вызовется потому что в конце
// }
//
// testFunction()


// Map-------------------------------------------------------------------------------------

// let map= new Map()
// map.set([],1)
// map.set([],2)
// console.log(map.size) //
// console.log(map.get([])) //
// let f = function(){}
// map.set(f,3)
// map.set(f,4)
// console.log(map.size) //
// console.log(map.get(f)) //



// const map = new Map()
// map.set('0', '1')
// map.set('1', '2s')
// map.set('2', '3s')
// const arr = [...map.values()]
// const res = arr.map(val => parseInt(val, 10)) //



// generator --------------------------------------------------------------------

// function* genereteNumber () {
//   yield 2
// }
//
// const gen = genereteNumber()
//
// console.log(gen.next()) //
// console.log(gen.next()) //
