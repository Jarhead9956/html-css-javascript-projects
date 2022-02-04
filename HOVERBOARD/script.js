const squareContainer = document.querySelector('.square-container')

const squareNum = 500
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']


for(let i = 0; i < squareNum; i++){
    const squareEl = document.createElement('div')
    squareEl.classList.add('square')

    squareEl.addEventListener('mouseover', (e) => addColor(squareEl))
    squareEl.addEventListener('mouseleave', (e) => removeColor(squareEl))

    squareContainer.appendChild(squareEl)
}

function addColor(element) {
    const randomColor = getRandomColor()
    element.style.backgroundColor = randomColor
    element.style. boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style. boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}