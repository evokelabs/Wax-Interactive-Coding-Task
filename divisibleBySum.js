const SumOfAllDigits = (integer, divisibleByNum = 5) => {
  //Calc sum of digits loop
  let sum = 0
  let numString = integer.toString()
  for (var i = 0; i < numString.length; i++) {
    sum = sum + Number(numString.charAt(i))
  }
  //Calc sum of all digits against divisibleByNum loop
  for (var i = 2; i <= divisibleByNum; i++) {
    if (sum % i === 0) {
      divisibleObject[`sum-of-digits-divisible-by-${i}`] = true
    } else {
      divisibleObject[`sum-of-digits-divisible-by-${i}`] = false
    }
  }
  return divisibleObject
}
