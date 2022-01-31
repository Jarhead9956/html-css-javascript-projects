const newNoteBtn = document.querySelector('.create-note')

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    notes.forEach(note => createNote(note))
}


newNoteBtn.addEventListener('click', () => createNote())

function createNote(text = '') {
    const noteEl = document.createElement('div')
    noteEl.classList.add('note-container')
    noteEl.innerHTML = `
    <div class="options">
        <button class="edit"><i class="far fa-edit"></i></button>
        <button class="delete"><i class="far fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? '' : 'hiden'}"></div>
    <textarea class="textarea ${text ? 'hiden' : ''}"></textarea>
    `

    const mainArea = noteEl.querySelector('.main')
    const textArea = noteEl.querySelector('.textarea')
    const deleteBtn = noteEl.querySelector('.delete')
    const editBtn = noteEl.querySelector('.edit')

    textArea.value = text
    mainArea.innerHTML = marked(text)

    deleteBtn.addEventListener('click', (e) => {
        noteEl.remove()

        updateLS()
    })

    editBtn.addEventListener('click', (e) => {
        textArea.classList.toggle('hiden')
        mainArea.classList.toggle('hiden')
    })

    textArea.addEventListener('input' , (e) => {
        let { value } = textArea
        mainArea.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(noteEl)
}

function updateLS() {
    const notesText = document.querySelectorAll('.textarea')

    const notes = []

    notesText.forEach(note => {
        notes.push(note.value)
    })

     localStorage.setItem('notes', JSON.stringify(notes))
}