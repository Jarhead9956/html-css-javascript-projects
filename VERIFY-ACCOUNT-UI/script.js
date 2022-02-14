const codeInp = document.querySelectorAll('.code')

codeInp[0].focus()

codeInp.forEach((code, ind) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9) {
            codeInp[ind].value = ''
            setTimeout(() => codeInp[ind + 1].focus(),10)
        }else if(e.key === 'Backspace') {
            setTimeout(() => codeInp[ind - 1].focus(), 10)
        }
    })
})