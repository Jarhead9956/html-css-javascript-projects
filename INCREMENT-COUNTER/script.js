const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const curentCounter = +counter.innerText
        const increment = Math.floor(target / 200)

        if(curentCounter < target) {
            counter.innerText = curentCounter + increment

            setTimeout(updateCounter, 1)
        }else{
            counter.innerText = target
        }
    }

    updateCounter()
})