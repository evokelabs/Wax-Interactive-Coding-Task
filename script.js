// Task 1 - Javascript

const divisibleButton = document.getElementById('divisibleButton')
const divisibleText = document.getElementById('divisibleText')
const divisibleSumOfInteger = document.getElementById('divisibleSumOfInteger')

divisibleButton.onclick = () => {
  divisibleButtonFunction()
}

divisibleButtonFunction = () => {
  console.log('sup')
  divisibleObject = {}
  divisibleInteger = document.getElementById('divisibleInteger').value
  divisibleByNum = document.getElementById('divisibleByNum').value
  divisibleText.innerHTML = JSON.stringify(
    SumOfAllDigits(divisibleInteger, divisibleByNum)
  )
}
divisibleButtonFunction()
