const divisibleButton = document.getElementById('divisibleButton')
const divisibleText = document.getElementById('divisibleText')
const divisibleSumOfInteger = document.getElementById('divisibleSumOfInteger')

divisibleButton.onclick = () => {
  divisibleObject = {}
  divisibleInteger = document.getElementById('divisibleInteger').value
  divisibleByNum = document.getElementById('divisibleByNum').value
  divisibleText.innerHTML = JSON.stringify(
    SumOfAllDigits(divisibleInteger, divisibleByNum)
  )
}
