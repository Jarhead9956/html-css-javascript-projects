const element = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

element.addEventListener('dragstart', dragStart)

element.addEventListener('dragend', dragEnd)

empties.forEach(empty => {
    empty.addEventListener('dragenter', dragEnter)

    empty.addEventListener('dragleave', dragLeave)

    empty.addEventListener('dragover', dragOver)

    empty.addEventListener('drop', dragDrop)
})

function dragStart(e) {
    this.classList.add('dragged')
    setTimeout(() => {
        this.style.display = 'none'
    }, 0)
}

function dragEnd() {
    this.classList.remove('dragged')
    this.style.display = 'block'
}

function dragEnter(e) {
    e.preventDefault()
    this.classList.add('hovered')
}

function dragLeave() {
    this.classList.remove('hovered')
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop() {
    this.className = 'empty'
    this.appendChild(element)
}