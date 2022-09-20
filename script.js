const divisibleButton = document.getElementById('divisibleButton')
const divisibleText = document.getElementById('divisibleText')

divisibleButton.onclick = () => {
  FetchObjectTextEvent()
}

FetchObjectTextEvent = () => {
  divisibleText.innerHTML = SumOfAllDigits(15)
}
