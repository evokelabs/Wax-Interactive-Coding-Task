let defaultInteger = 37
let divisibleObject = {}

const SumOfAllDigits = (integer, divisibleByNum = 5) => {
  console.log('Input: \n' + integer)
  let sum = 0
  let numString = integer + ''
  for (var i = 0; i < numString.length; i++) {
    sum = sum + Number(numString.charAt(i))
  }
  DivisibleBySum(sum, divisibleByNum)
}

const DivisibleBySum = (sum, divisibleByNum) => {
  for (var i = 2; i <= divisibleByNum; i++) {
    if (sum % i === 0) {
      divisibleObject[`sum-of-digits-divisible-by-${i}`] = true
    } else {
      divisibleObject[`sum-of-digits-divisible-by-${i}`] = false
    }
  }
  return divisibleObject
}

SumOfAllDigits(defaultInteger)
