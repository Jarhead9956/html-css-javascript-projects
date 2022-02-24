const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUl = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => createTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    createTodo()
})

function createTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        todoEl.innerText = todoText

        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        
        todoEl.addEventListener('click', (e) => {
            todoEl.classList.toggle('completed')
            updateLs()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLs()
        })

        todoUl.appendChild(todoEl)

        updateLs()

        input.value = ''
    }
}

function updateLs() {
    const todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}