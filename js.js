// custom bind ---------------------------------------------------------------------------------

// const person = {
//   name: "Ivan",
// }
// function getName(lastName) {
//   return this.name + " " + lastName
// }
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

// Написать функцию pipe
// const times = (y) => (x) => x * y
// const plus = (y) => (x) => x + y
// const subtract = (y) => (x) => x - y
// const divide = (y) => (x) => x / y
// const calculationOne = pipe([times(2), times(3)])
// console.log(calculationOne(2)) // 12
// const calculationTwo = pipe([times(2), plus(3), times(4)])
// console.log(calculationTwo(2)) // 28

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
// function throttle() {}

// function sayHello(text) {
//   console.log(`Привет! Это сообщение будет выводиться не чаще одного раза в секунду. ${text ? text : ""}`)
// }

// const throttledSayHello = throttle(sayHello, 1000)

// throttledSayHello("A !")
// setTimeout(throttledSayHello("B !"), 500) // Попытка вызвать через 500 мс после первого вызова
// setTimeout(throttledSayHello("C !"), 1500) // Попытка вызвать через 1500 мс после первого вызова

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

// write methods

// console.log((2).plus(3).minus(1)) // 4

// кастомный promiseAll --------------------------------------------------------------------------------------------

// const promiseAll = () => {
// }

// const pr1 = new Promise((resolve, reject) => setTimeout(() => resolve("Промис 1"), 1000))
// const pr2 = new Promise((resolve, reject) => setTimeout(() => resolve("Промис 2"), 2000))
// const pr3 = new Promise((resolve, reject) => setTimeout(() => resolve("Промис 3"), 3000))

// promiseAll([pr1, pr3, pr2])
//   .then((results) => {
//     console.log(results) // ["Промис 1", "Промис 3", "Промис 2"]
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

// custom memo -------------------------------------------------------------------------------------------------------
// const pow = (a, b) => a * b
// const memo = () => {}
// const memoized = memo(pow)
// console.log(memoized(4, 2)) // 8

// CLASSES  __________________________________________________________________________________________________________

// class Cat {
//   name = 'Murka'
//   constructor(name) {
//   }
// }
// const yasha = new Cat('Yasha')
// console.log(yasha) //
// console.log(yasha instanceof Cat)  //

// class Logger {
//   log(text) {
//     console.log(text)
//   }
// }
// class Printer extends Logger {
//   constructor(name) {
//     super()
//     this.name = name
//   }
//   log(text) {
//     super.log(`${this.name}: ${text}`)
//   }
// }
// const printer = new Printer('Only')
// printer.log('Hello!')
// //

// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }
//   get radius() {
//     return this._radius;
//   }
//   set radius(value) {
//     if (value <= 0) throw new Error("Radius must be positive");
//     this._radius = value;
//   }
//   get diameter() {
//     return this._radius * 2;
//   }
//   dia () {
//     return this._radius * 2;
//   }
//   set diameter(value) {
//     if (value <= 0) throw new Error("Diameter must be positive");
//     this._radius = value / 2;
//   }
// }
// const myCircle = new Circle(5);
// console.log(myCircle.radius) //
// myCircle.diameter = 20
// console.log(myCircle.diameter) //
// console.log(myCircle.dia()) //

// class Set {
// }
// const set = new Set([1, 1, 2, 3, 2])
// console.log(set)
// console.log(set.has(1)) // true
// console.log(set.has(6)) // false
// set.add(6)
// console.log(set.has(6)) //true
// set.delete(6)
// console.log(set.has(6)) //false

// class EventEmitter {}
// const emitter = new EventEmitter()
// const sub1 = emitter.subscribe("event1", callback1)
// const sub2 = emitter.subscribe("event2", callback2)
// const sub3 = emitter.subscribe("event1", callback1)
// emitter.emit("event1", 3, 2)
// emitter.emit("event2", 3, 4)
// // В консоль выведется
// // 3
// // 3
// // 12
// sub1.release()
// sub3.release()
// function callback1(x, y) {
//   console.log(x + y, "event1")
// }
// function callback2(x, y) {
//   console.log(x * y, "event2")
// }

// TYPES __________________________________________________________________________________________________________

// console.log(typeof Object) //
// console.log(typeof Date) //
// console.log(typeof null) //
// console.log(typeof 1n) //
// console.log(typeof new String()) //
// console.log(0 || false) //
// console.log("-------------------------")
// console.log(typeof String) //
// console.log(typeof new Function()) //
// console.log(typeof NaN) //
// console.log(false || (0 && 5)) //
// console.log(true && false) //
// console.log(typeof []) //
// console.log("-------------------------")
// console.log(typeof typeof {}) //
// console.log(typeof Array) //
// console.log(typeof {}) //
// console.log(undefined == null) //
// console.log(NaN == NaN) //
// console.log(NaN === NaN) //

// PROMISES __________________________________________________________________________________________________________________________
// setTimeout(()=>{
//   console.log(1)
// },0)
//
// let p = new Promise((resolve, reject) => {
//   console.log(2)
// })
// p.then(()=>console.log(3))
//
// setTimeout(()=>{
//   console.log(4)
// },1)
// console.log(5)

// let p = new Promise((resolve, reject) => {
//   console.log(1)
//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });
//
// p.then(result => console.log(result))
//
// setTimeout(() => {
//   console.log(3)
// }, 1000)
//
// setTimeout(() => {
//   console.log(4)
// }, 500)

// Promise
//   .reject('a')
//   .then(p => p + '1', p => p + '2')
//   .catch(p => p + 'b')
//   .catch(p => p + 'c')
//   .then(p => p + 'd1')
//   .then('d2')
//   .finally(p => p + 'e')
//   .then(p => console.log(p))

// (function () {
//   console.log(1)
//   setTimeout(() => console.log(2), 1000)
//   setTimeout(() => console.log(3), 0)
//   Promise.resolve(5).then(console.log)
//   new Promise((res) => {
//     console.log(6)
//     res(7)
//   })
//     .then(console.log)
//   console.log(4)
// })()

// const p1 = new Promise((resolve, reject) => {
//   throw new Error('Uh-oh!');
// });
// const p2 = new Promise((resolve, reject) => {
//   resolve("p2 ok");
// });
//
// Promise.allSettled([p1, p2]).catch((error) => {
//   console.log('My error' + error);
// }).then((result) => {
//   console.log(result[1].status);
// });

// const promise =
//
// promise.then((res) => {
//   console.log('then', res) // them
// }).catch((err) => {
//   console.log('catch', err)  // catch Ilya
// })

// console.log("1")
// const promise = new Promise((resolve) => {
//   console.log("2")
//   setTimeout(() => {
//     resolve("3")
//   }, 2000)
// })
// promise
//   .then((result) => {
//     console.log(result)
//     setTimeout(() => {
//       console.log("5")
//     }, 1000)
//     return "4"
//   })
//   .then((result) => {
//     console.log(result)
//     return result
//   })
//   .then((result) => {
//     console.log(result)
//   })
// console.log("6")

// console.log(1)
// const foo = () => (new Promise((resolve, reject) => {
//   console.log(2);
//   resolve(3)
// }))
// console.log(4)
// foo().then(res => console.log(res))
// console.log(5)
// Promise.resolve()
//   .then(() => console.log(1))
//   .then(() => console.log(7))
//   .then(() => setTimeout(() => console.log(2), 0))
//   .then(() => console.log(3))
// Promise.resolve()
//   .then(() => console.log(4))
//   .then(() => setTimeout(() => console.log(5), 0))
//   .then(() => console.log(6))

// fetch("https://www.google.com").then(() => console.log(8))
// Promise.resolve().then(() => console.log(6))
// Promise.reject().catch(() => console.log(9))
// const promise = new Promise((resolve, reject) => {
//   console.log(7)
//   setTimeout(() => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
//   }, 0)
//   console.log(4)
// })
// promise.then((res) => console.log(res))
// console.log(5)

// function allSettled(promises) {}
// const promises = [
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//   Promise.reject(2),
//   Promise.resolve(3),
// ]
// allSettled(promises)
// //   [
// //     { "status": "fulfilled", "value": 1 },
// //       { "status":"rejected", "reason": 2 },
// //       { "status": "fulfilled", "value": 3 }
// //   ]

// const promise = new Promise(() => {
//   console.log("prom 1")
//   setTimeout(() => {
//     console.log("timeout 1")
//   }, 100)
// })
// console.log("log 1")
// Promise.resolve()
//   .catch(() => console.log("catch 1"))
//   .then(() => console.log("then 1"))
// Promise.resolve().then(() => console.log("then 2"))
// console.log("log 2")

// console.log(1)
// const promise = new Promise((resolve, reject) => {
//   console.log(2)
//   setTimeout(() => {
//     resolve(3)
//   }, 2000)
//   resolve(console.log(4))
// })
// function f1() {
//   console.log(5)
// }
// promise
//   .then((result) => {
//     console.log(result)
//     return 6
//   })
//   .then((result) => {
//     console.log(result)
//   })
// setTimeout(() => console.log(8), 0)
// console.log(9)

// async function f() {
//   console.log(1)
//   const promise = new Promise((resolve) => {
//     console.log(2)
//     setTimeout(() => {
//       console.log(3)
//       resolve("ГОТОВО!")
//       console.log(4)
//     })
//   })
//   console.log(5)
//   const result = await promise
//   console.log(6)
//   console.log(result)
//   return "Result"
// }
// f()
// console.log(7)

// ;(() => {
//   console.log("1")
//   setTimeout(() => {
//     console.log("2")
//     Promise.resolve("3").then(console.log)
//   })
//   Promise.resolve("4").then(console.log)
//   Promise.resolve("5").then((item) => setTimeout(() => console.log(item)))
//   console.log("6")
//   Promise.resolve("7").then(console.log)
//   setTimeout(() => {
//     Promise.resolve("8").then(console.log)
//     console.log("9")
//   }, 0)
//   console.log("10")
// })()

// VAR LET CONST ____________________________________________________________________________________________________________________________
// function changeStuff(a, b) {
//   a *= 10
//   b.item = 'changed'
// }
// let num = 10
// let obj1 = {item: 'unchanged'}
// changeStuff(num, obj1)
// console.log(num)
// console.log(obj1.item)

// var x = 10
// function bar(funArg) {
//   var x = 30
//   funArg()
// }
// function foo() {
//   console.log(x)
// }
// foo.x = 20
// bar.x = 40
// bar(foo)

// var a = 'hello'
// function b() {
//   if (false) {
//     var a = 'world'
//   } else {
//     var b = 'man'
//   }
//   console.log(b)
//   console.log(a)
// }
// b()

// var i = 10
// var array = []
// while (i--) {
//   console.log(i)
//   array.push(function () {
//     return i + i
//   })
// }
// console.log([array[0](), array[1]()])

// let res = 6
// function foo() {
//   console.log(res)
// }
// function someFoo() {
//   let res = 8
//   foo()
//   console.log(res)
// }
// someFoo()

// var a = 1
// function foo() {
//   if (a) {
//     console.log('Here')
//     var a = 10
//   }
//   console.log(a)
// }
// foo()

///////// answers ////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// custom memo -----------------------------------------------------------------------------------------------------------
// const memo = (fn) => {
//   const cache = new Map()
//   return (...arg) => {
//     if (cache.has(arg)) {
//       return cache.get(arg)
//     }
//     const result = fn(...arg)
//     cache.set(arg, result)
//     return result
//   }
// }

// -------------------------------------------------------------------------------------------------------------------
// class EventEmitter {
//     constructor() {
//         this.events = {};
//     }
//     subscribe(event, callback) {
//         if (!this.events[event]) {
//             this.events[event] = [];
//         }
//         const callbackWrapper = { callback, event };
//         this.events[event].push(callbackWrapper);
//         return {
//             release: () => {
//                 this.events[event] = this.events[event].filter(cb => cb !== callbackWrapper);
//             }
//         };
//     }
//     emit(event, ...args) {
//         if (this.events[event]) {
//             this.events[event].forEach(cbWrapper => cbWrapper.callback(...args));
//         }
//     }
// }
