const textEl = document.getElementById('text')
const speedInp = document.getElementById('speed')

let text = 'We love programming !'
let indx = 1
let speed = 300 / speedInp.value

function showText() {
    let displayed = text.slice(0, indx)

    textEl.innerText = displayed
    indx++

    if(indx > text.length) {
        indx = 1
    }

    setTimeout(() => {
        showText()
    }, speed)
}

speedInp.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})

showText()
