// 1. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object
const now = new Date()

const month = now.getMonth() + 1
const date = now.getDate()
const year = now.getFullYear()
const hour = now.getHours()
const minutes = now.getMinutes()

const showDateTime = () => `${date}-${month}-${year} ${hour}:${minutes}`

console.log('Task 1: \n', showDateTime())

// 2. Declare a function name swapValues. This function swaps value of x to y (without using extra variables)
const swapValues = (x, y) => {
  ;[x, y] = [y, x]
  return `x = ${x}, y = ${y}`
}

console.log('Task 2: \n', swapValues(3, 4)) // x => 4, y => 3
console.log('Task 2: \n', swapValues(4, 5))

// 3. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method)
const reverseArray = (arr) => {
  const reversed = []
  arr.forEach((v) => reversed.unshift(v))
  return reversed
}

console.log('Task 3: \n', reverseArray([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]
console.log('Task 3: \n', reverseArray(['A', 'B', 'C'])) // ['C', 'B', 'A']

// 4. Write a function which takes any number of arguments and return the sum of the arguments
const sum = (...numbers) => numbers.reduce((a, b) => a + b)

console.log('Task 4: ', sum(1, 2, 3)) // 6
console.log('Task 4: ', sum(1, 2, 3, 4)) // 10

// 5. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// Fisher–Yates shuffle algorithm

const shuffleArray = (arr) => {
  arr.forEach((el, i) => {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const tempEl = arr[randomIndex]
    arr.splice(randomIndex, 1, el)
    arr.splice(i, 1, tempEl)
  })
  return arr
}

console.log('Task 5: ', shuffleArray([1, 2, 3, 4, 5, 6]))

// 6. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
// recursive solution
function factorial(n) {
  return n === 0 || n === 1 ? 1 : n * factorial(n - 1)
}

console.log('Task 6: ', factorial(4)) // 24

// 7. Write a functions which checks if all items are unique in the array
const isArrayUnique = (arr) => {
  return arr.length === new Set(arr).size
}

console.log('Task 7: ', isArrayUnique([1, 2, 3, 4])) // true
console.log('Task 7: ', isArrayUnique([1, 4, 4, 4])) // false

// 8. Write a function which checks if all the items of the array are the same data type
const detectType = (x) => {
  let type = typeof x
  if (type === 'object') {
    type = Object.prototype.toString.call(x)
  }
  if (Number.isNaN(x)) {
    type = 'NaN'
  }
  return type
}

const areElementsSameType = (arr) => {
  return new Set(arr.map(detectType)).size <= 1
}

console.log('Task 8, Expected result `true`: ', areElementsSameType([1, 2, 3])) // true
console.log('Task 8, Expected result `false`: ', areElementsSameType([NaN, 2])) // should be false
console.log('Task 8, Expected result `false`: ', areElementsSameType([[], {}])) // should be false
console.log('Task 8, Expected result `false`: ', areElementsSameType([null, {}])) // should be false
console.log('Task 8, Expected result `false`: ', areElementsSameType([1, 2, 3, 4, 'a'])) // false
