const progress = document.getElementById('progress');
const curcles = document.querySelectorAll('.circle');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive++

    if(currentActive > curcles.length) {
        currentActive = curcles.length
    }

    update();
})

prevBtn.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update();
})

function update() {
    curcles.forEach((curcle, index) => {
        if(index < currentActive) {
            curcle.classList.add('active');
        }else {
            curcle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (curcles.length - 1) * 100 + '%';

    if(currentActive === 1) {
        prevBtn.disabled = true;
    }else if(currentActive === curcles.length) {
        nextBtn.disabled = true;
    }else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}