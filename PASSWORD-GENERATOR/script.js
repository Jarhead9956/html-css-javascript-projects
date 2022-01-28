const resultEl = document.getElementById('result')
const copyBtn = document.getElementById('clipboard')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateBtn = document.getElementById('generate')

const randomFunc = {
    lowercase: getRandomLower,
    uppercase: getRandomUpper,
    numbers: getRandomNumber,
    symbols: getRandomSymbol
}

copyBtn .addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateBtn.addEventListener('click', (e) => {
    const length = lengthEl.value
    const uppercase = uppercaseEl.checked
    const lowercase = lowercaseEl.checked
    const numbers = numbersEl.checked
    const symbols = symbolsEl.checked

    resultEl.innerText = generatePassword(length, uppercase, lowercase, numbers, symbols)
})

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    let password = ''
    const typesCount = lowercase + uppercase + numbers + symbols
    const typesArr = [{lowercase}, {uppercase}, {numbers}, {symbols}].filter(item => Object.values(item)[0])
    const shuffledTypesArr = shuffle(typesArr)
    
    if(typesCount === 0) {
        return ''
    }

    for (let index = 0; index < length; index += typesCount) {
        shuffledTypesArr.forEach(type => {
            const funcType = Object.keys(type)

            password += randomFunc[funcType] ()
        })
        
    }

    return password
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }