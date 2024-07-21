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

// recursion ---------------------------------------------------------------------------------------
// const array = [1, 2, [3, 4], [[5, "w"], "d"], null]
// function arrayClone() {}
// console.log(arrayClone(array))

// const tree = {
//   value: 1,
//   children: [
//     {
//       value: 4,
//       children: [{ value: 5 }, { value: 6 }],
//     },
//   ],
// }
// function deepCopy() {}
// console.log(deepCopy(tree))

// function getTreeValues(tree) {
// }
// console.log(getTreeValues(tree))

// const array = [1, 1, [1, [1, 2], 1], [1]]
// const sum = (arr) => {
// }
// console.log(sum(array)) // 8

// Нужно написать функцию isEqual, которая сравнивает значения объектов
// const redCar = {
//   wheels: 4,
//   brake: { ki: 3 },
//   options: [
//     { optionkey: "123-234-345", optionName: "color" },
//     { optionKey: "234-345-987", optionName: "warranty" },
//   ],
// }
// const yellowCar = {
//   wheels: 4,
//   brake: { zi: 3 },
//   options: [
//     { optionkey: "123-234-345", optionName: "color" },
//     { optionKey: "234-345-987", optionName: "warranty" },
//   ],
// }
// const blueCar = {
//   wheels: 4,
//   brake: 4,
//   options: [{ optionKey: "234-345-987", optionName: "warranty" }],
// }
// const greenCar = {
//   options: [
//     { optionkey: "123-234-345", optionName: "color" },
//     { optionKey: "234-345-987", optionName: "warranty" },
//   ],
//   brake: { ki: 3 },
//   wheels: 4,
// }
// function isEqual() {
// }
// console.log(isEqual(redCar, yellowCar)) // false
// console.log(isEqual(redCar, blueCar)) // false
// console.log(isEqual(redCar, greenCar)) // true

// currying -------------------------------------------------------------------------------
// const add = (x) => (y) => x + y
// const mul = (x) => (y) => x * y
// const pipe =
// const pipedFoo = pipe(add(2), mul(2), add(3))
// console.log(pipedFoo(4)) // (4 + 2) * 2 + 3 = 15

// Написать функцию add, которая принимает число и может вызываться бесконечное число раз,
// пока не будет вызвана без аргументов - тогда возвращается сумма переданных  ранее чисел:
// const add = (num) => {}
// console.log(add(9)(10)()) // 19
// console.log(add(9)()) // 9
// console.log(add()) // 0

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

//throttle --------------------------------------------------------------------------------------
function throttle() {}

function sayHello(text) {
  console.log(`Привет! Это сообщение будет выводиться не чаще одного раза в секунду. ${text ? text : ""}`)
}

const throttledSayHello = throttle(sayHello, 1000)

throttledSayHello("A !")
setTimeout(throttledSayHello("B !"), 500) // Попытка вызвать через 500 мс после первого вызова
setTimeout(throttledSayHello("C !"), 1500) // Попытка вызвать через 1500 мс после первого вызова

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

// кастомный promiseAllSettled --------------------------------------------------------------------------------------------
// const promiseAllSettled = (promises) => {}
// const p1 = Promise.resolve(42)
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject(42)), 100)
// promiseAllSettled([p1, p3]).then(console.log)

// palindrome ------------------------------------------------------------------------------------------------------
// const palindrome = () => {}
// console.log(palindrome("abba")) // true
// console.log(palindrome("abc")) // false

///////// answers ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// recursion ---------------------------------------------------------------------------------------------------
// function deepCopy(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj
//   }
//   if (Array.isArray(obj)) {
//     return obj.map(deepCopy)
//   }
//   const result = {}
//   for (let key of Object.keys(obj)) {
//     result[key] = deepCopy(obj[key])
//   }
//   return result
// }

// function deepClone(array) {
//   return array.reduce((acc, item) => {
//     if (typeof item !== "object" || item === null) {
//       acc.push(item)
//     } else {
//       acc.push(deepClone(item))
//     }
//     return acc
//   }, [])
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

// Нужно написать функцию isEqual, которая сравнивает значения объектов
// function isEqual(obj1, obj2) {
//   const keys1 = Object.keys(obj1)
//   const keys2 = Object.keys(obj2)
//   if (keys1.length !== keys2.length) return false
//   for (let key of keys1) {
//     const val1 = obj1[key]
//     const val2 = obj2[key]
//     if (typeof val1 === "object" && val1 !== null && typeof val2 === "object" && val2 !== null) {
//       if (!isEqual(val1, val2)) return false
//     } else if (val1 !== val2) {
//       return false
//     }
//   }
//   return true

// currying ----------------------------------------------------------------------------------------------------
// const add = (num) => {
//   if (!num) return 0
//   let sum = num || 0
//   return (param) => {
//     if (!param) {
//       return sum
//     } else {
//       sum += param
//       return add(sum)
//     }
//   }
// }

// palindrome ------------------------------------------------------------------------------------------------------
// const palindrome = (str) => {
//   let left = 0
//   let right = str.length - 1
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false
//     }
//     left += 1
//     right -= 1
//   }
//   return true
// }

// promiseAllSettled --------------------------------------------------------------------------------------------------------
// const promiseAllSettled = (promises) => {
//   return new Promise((resolve) => {
//     const results = []
//     let finished = 0
//     if (promises.length === 0) {
//       return resolve(results)
//     }
//     promises.forEach((promise, i) => {
//       promise
//         .then((res) => {
//           results[i] = { status: "fulfilled", value: res }
//         })
//         .catch((e) => {
//           results[i] = { status: "rejected", reason: e }
//         })
//         .finally(() => {
//           finished += 1
//           if (finished === promises.length) {
//             resolve(results)
//           }
//         })
//     })
//   })
// }
// const p1 = Promise.resolve(42)
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject(42)), 100)
// promiseAllSettled([p1, p3]).then(console.log)

// throttle ------------------------------------------------------------------------------------------------------------
// function throttle(func, wait) {
//   let shouldBeCalled = true
//   return (...params) => {
//     if (!shouldBeCalled) return
//     shouldBeCalled = false
//     setTimeout(() => {
//       shouldBeCalled = true
//     }, wait)
//     func.apply(this, params)
//   }
// }
