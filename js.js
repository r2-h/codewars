// const findAnagrams = (arr) => {

// }

// const result = findAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// console.log(result) // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
// -----------------------------------------------------------------------------------------------------------------
// custom flat

// const array = [[[1, [100, [5]]], 2], [[1]], 2]
// console.log(array.flat(3))
// console.log(array.customFlat(3))
// -----------------------------------------------------------------------------------------------------------------
// const checkBrackets = (str) => {

// }

// console.log(checkBrackets("([]{})")) // true
// console.log(checkBrackets("()[]{}")) // true
// console.log(checkBrackets("({[}])")) // false
// console.log(checkBrackets("([)]")) // false
// console.log(checkBrackets("{[}")) // false
// -----------------------------------------------------------------------------------------------------------------

// Реализуйте функцию-шпиона spy, которая принимает на вход любую функцию и может следить за ее вызовами

// function foo(a) {
//   return a + "A"
// }

// const spyFoo = spy(foo)

// spyFoo("test") // log: test
// spyFoo.calledWith("test") // out: true
// spyFoo.calledWith("test123") // out: false
// spyFoo.returned("testA") // out: true
// spyFoo.returned("test") // out: false

// spyFoo('test2')
// spyFoo.callCount() // out: 2

// -----------------------------------------------------------------------------------------------------------------

// function fibonacci(n) {
//   if (n <= 1) return n

//   return fibonacci(n - 1) + fibonacci(n - 2)
// }
// -----------------------------------------------------------------------------------------------------------------
// // получить самый быстрый промис м среднее время выполнения промисов

// const doSomething = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < 0.5) {
//         reject("error")
//       } else {
//         resolve(ms)
//       }
//     }, ms)
//   })
// }

// const getDelay = () => {
//   let rand = 1000 + Math.random() * 2000
//   return Math.floor(rand)
// }

// const p1 = doSomething(getDelay())
// const p2 = doSomething(getDelay())
// const p3 = doSomething(getDelay())
// const p4 = doSomething(getDelay())

// -----------------------------------------------------------------------------------------------------------------

/*  
JavaScript. Напиши функцию-конструктор, которая принимает массив объектов с id и должна вернуть объект,
у которого есть метод, возвращающий этот массив отсортированным и защищенным от изменений. 
*/

// --------------------------------------------------------------------------------------------------------------------
// class EventEmitter {}

// const button = new EventEmitter()

// // Subscribe listeners to the 'click' event
// const removeHandleClick1 = button.addEventListener("click", () => console.log("called on click 1"))
// const removeHandleClick2 = button.addEventListener("click", () => console.log("called on click 2"))

// // Subscribe a listener to the 'hover' event
// const removeHandleHover = button.addEventListener("hover", (payload) =>
//   console.log("called on hover", payload)
// )

// // Notify all listeners of the 'click' event and the 'hover' event with a payload
// button.dispatchEvent("click") // Output: called on click 1, called on click 2
// button.dispatchEvent("hover", 1) // Output: called on hover 1

// // Remove the subscribed listeners
// removeHandleClick1()
// removeHandleClick2()
// removeHandleHover()

// // Attempt to notify listeners after removal - no handlers should be called
// button.dispatchEvent("click") // No handlers were called
// button.dispatchEvent("hover") // No handlers were called
// ------------------------------------------------------------------------------------------------------

// function _sum(a, b) {
//   return a + b
// }
// function spy(f) {}
// const sum = spy(_sum)
// console.log(sum(2, 2)) // 4
// console.log(sum(21, 21)) // 42
// console.log(sum.data.calls) // 2
// console.log(sum.data.args) // [[2, 2], [21, 21]]
// console.log(sum.data.results) // [4, 42]
// ---------------------------------------------------------------------------------------------------

// console.log(five(plus(one())))
// console.log(seven(minus(two())))
// ---------------------------------------------------------------------------------------------------

// custom reduce
// const array = [1, 2, 3]
// console.log()

// custom bind ---------------------------------------------------------------------------------

// const person = {
//   name: "Ivan",
// }
// function getName(lastName) {
//   return this.name + " " + lastName
// }
// const bindedFn = bind(getName, person) // так и без bindedFn
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

// -------------------------------------------------------------------------------
// const get = (obj, path) => {}

// const obj = {
//   a: {
//     b: {
//       c: "d",
//     },
//     e: "f",
//   },
// }

// console.log(get(obj, "a.e")) // 'f'
// console.log(get(obj, "a.b")) // {c: 'd'}

//---------------------------------------------------------------------------------------------------------

// функция  которая пытается получить данные с URL с логикой повторных попыток

// async function get(url) {}

// get("https://example.com/data")
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err))

//---------------------------------------------------------------------------------------------------------
// function isMonotonic(numbers) {
//     let increasing = true;
//     let decreasing = true;

//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] > numbers[i - 1]) {
//         decreasing = false;
//       }
//       if (numbers[i] < numbers[i - 1]) {
//         increasing = false;
//       }
//     }

//     return increasing || decreasing;
//   }

//   console.log(isMonotonic([1, 2, 3, 6])); // true
//   console.log(isMonotonic([6, 3, 3, 2, 1])); // true
//   console.log(isMonotonic([1, 1, 1])); // true
//   console.log(isMonotonic([1, 10, 6])); // false

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
// setTimeout(() => {
//   console.log(1)
// }, 0)
// let p = new Promise((resolve, reject) => {
//   console.log(2)
// })
// p.then(() => console.log(3))
// setTimeout(() => {
//   console.log(4)
// }, 1)
// console.log(5)
// let p2 = new Promise((resolve, reject) => {
//   console.log(6)
//   setTimeout(() => {
//     resolve(7)
//   }, 1000)
// })
// p2.then((result) => console.log(result))
// setTimeout(() => {
//   console.log(8)
// }, 1000)
// setTimeout(() => {
//   console.log(9)
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

// this ---------------------------------------------------------------------------------------------------

// function foo() {
//   const x = 10;
//   return {
//     x: 20,
//     bar: () => {
//       console.log(this.x);
//     },
//     baz: function () {
//       console.log(this.x);
//     }
//   }
// }
//
// // const obj1 = foo();
// // obj1.bar()  //
// // obj1.baz() //
//
// const obj2 = foo.call({x: 30})
// let y = obj2.bar
// let z = obj2.baz
//
// y() //
// z() //
//
// // obj2.bar() //
// // obj2.baz() //

// class A {
//   a = 1
//
//   x() {
//     console.log(this.a)
//   }
//
//   y = () => {
//     console.log(this.a)
//   }
// }
//
// const a = new A()
// a.x() //
// a.y() //

// var a = 0
// const x = () => console.log(this.a)
// x.bind(1).bind(2).bind(3)() //
// x() //
// function y() {console.log(this.a)}
// y.bind(1).bind(2).bind(3)() //
// y() //

// var myObject = {
//   foo: 'bar',
//   func: function() {
//     var self = this
//     console.log('outer func: this.foo = ' + this.foo)
//     console.log('outer func: self.foo = ' + self.foo)
//       return (function() {
//         console.log('inner func : this.foo = ' + this.foo)
//         console.log('inner func : self.foo = ' + self.foo)
//       })()
//   }
// }
// myObject.func()

// this.x = 'global'
//
// const arrow = () => {
//   this.x = 1
//
//   console.log(this.x)
// }
//
// function dec() {
//   this.x = 2
//   console.log(this.x)
// }
//
// const obj = {
//   x: '3',
//   objFunc() {
//     console.log(this.x)
//   }
// }
// const method = obj.objFunc
//
// arrow()
// dec()
// obj.objFunc()
// method()

// const obj = {
//   name: "Colin",
//   prop: {
//     name: "Rox",
//     getname: function () {
//       return this.name
//     },
//     arrow: () => this.name,
//     arrow: () => this.name,
//     arrowInsideFunction: function () {
//       return () => console.log(this.name)
//     },
//   },
// }
// console.log(obj.prop.getname()) //
// const test = obj.prop.getname
// console.log(test()) //
// console.log(test.call(obj.prop)) //
// console.log(test.apply(obj)) //
// console.log(test.bind(obj)()) //
// console.log(test.bind(obj.prop).bind(obj.prop)()) //
// console.log(obj.prop.arrow()) //
// obj.prop.arrowInsideFunction()() //

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

//--------------------------------------------------------------------------------------------------------------------------
// async function get(url) {
//     for (let i = 0; i <= 5; i++) {
//       try {
//         const response = await fetch(url)

//         if (!response.ok) {
//           throw new Error(`Ошибка: ${response.status}`)
//         }

//         const data = await response.json()
//         return data
//       } catch (error) {
//         if (i === 5) {
//           throw new Error("Заданный URL недоступен")
//         }
//       }
//     }
//   }

//   get("https://example.com/data")
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))
