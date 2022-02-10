const background = document.querySelector('.background')
const passwordInp = document.getElementById('password')

passwordInp.addEventListener('input', (e) => {
    const value = e.target.value
    const passwordLength = value.length
    const blur = 20 - (passwordLength * 2)
    
    background.style.filter = `blur(${blur}px)`
})