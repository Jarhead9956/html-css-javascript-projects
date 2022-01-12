const body = document.body
const sliders = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('.left-arrow')
const rightBtn = document.querySelector('.right-arrow')

let activeSlide = 0

rightBtn.addEventListener('click', (e) => {
    if(activeSlide < (sliders.length - 1)) {
        activeSlide++
    }else{
        activeSlide = 0
    }
    
    changeSlide()
    setBodyBackground(activeSlide)
})

leftBtn.addEventListener('click', (e) => {
    if(activeSlide > 0) {
        activeSlide--
    }else{
        activeSlide = sliders.length - 1
    }

    changeSlide()
    setBodyBackground(activeSlide)
})

setBodyBackground(activeSlide)

function setBodyBackground() {
    body.style.backgroundImage = sliders[activeSlide].style.backgroundImage
}

function changeSlide() {
    sliders.forEach(slide => {
        slide.classList.remove('active')
    })

    sliders[activeSlide].classList.add('active')
}