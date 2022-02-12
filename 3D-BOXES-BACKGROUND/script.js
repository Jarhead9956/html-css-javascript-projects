const magicBtn = document.getElementById('btn')
const boxesContainer = document.getElementById('boxes')

magicBtn.addEventListener('click', (e) => boxesContainer.classList.toggle('big'))

function createBoxes() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            const boxEl = document.createElement('div')
            boxEl.classList.add('box')
            boxEl.style.backgroundPosition = `${j * -125}px ${i * -125}px`

            boxesContainer.appendChild(boxEl)
        }
    }
}

createBoxes()