const imgsContainer = document.getElementById('imgs')
const imgs = document.querySelectorAll('#imgs img')
const pervBtn = document.getElementById('left')
const nextBtn = document.getElementById('right')

let interval = setInterval(run, 2000);
let indx = 0

pervBtn.addEventListener('click', (e) => {
    indx--
    changeImg()
    resetinterval()
})

nextBtn.addEventListener('click', (e) => {
    indx++
    changeImg()
    resetinterval()
})

function run() {
    indx++
    changeImg()
}

function changeImg() {
    
    if(indx > imgs.length - 1){
        indx = 0
    }else if (indx < 0) {
        indx = 0
    }
    
    imgsContainer.style.transform = `translateX(${-indx * 500}px)`
}

function resetinterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000);
}