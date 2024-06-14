// custom bind ---------------------------------------------------------------------------------

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

// const array = [1, 1, [1, [1, 2], 1], [1]]
// const sum = (arr) => {
// }
// console.log(sum(array)) // 8

// currying -------------------------------------------------------------------------------
// const add = (x) => (y) => x + y
// const mul = (x) => (y) => x * y

// const pipe =
// const pipedFoo = pipe(add(2), mul(2), add(3))

// console.log(pipedFoo(4)) // (4 + 2) * 2 + 3 = 15

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
// map.set("0", "1")
// map.set("1", "2s")
// map.set("2", "3s")
// const arr = [...map.values()]
// const res = arr.map((val) => parseInt(val, 10)) 
// console.log(res) //

// generator ------------------------------------------------------------------------------------

// function* genereteNumber () {
//   yield 2
// }
//
// const gen = genereteNumber()
//
// console.log(gen.next()) //
// console.log(gen.next()) //

//prototype ---------------------------------------------------------------------------------------------------

/* // write methods
Number.prototype.plus = function (value) {
  return this + value
}
Number.prototype.minus = function (value) {
  return this - value
} */

// console.log((2).plus(3).minus(1)) // 4

// кастомный promiseAll --------------------------------------------------------------------------------------------

// const promiseAll = (promises) => {

// }

// const pr1 = new Promise((resolve, reject) => setTimeout(() => resolve("Промис 1"), 1000))
// const pr2 = new Promise((resolve, reject) => setTimeout(() => resolve("Промис 2"), 2000))
// const pr3 = new Promise((resolve, reject) => setTimeout(() => resolve("Промис 3"), 3000))

// promiseAll([pr1, pr2, pr3])
//   .then((results) => {
//     console.log(results) // ["Промис 1", "Промис 2", "Промис 3"]
//   })
//   .catch((error) => {
//     console.error("Ошибка:", error)
//   })
