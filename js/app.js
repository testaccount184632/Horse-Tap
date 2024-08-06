const getBalance = document.querySelector('#balance-score')
const getHorseImage = document.querySelector('.horse-image-container > img')
const getResetButton = document.querySelector('.reset')
const getStatus = document.querySelector('#status')

let score = 0;

getHorseImage.addEventListener('click', function () {
    score++
    getBalance.innerHTML = `${score}`
    if (score == 50) {
        getStatus.innerText = `Опытный`
        getHorseImage.setAttribute('src', 'img/horse-2.png')
    } else if (score == 150) {
        getStatus.innerText = `Проффесионал`
        getHorseImage.setAttribute('src', 'img/horse-3.png')
    } else if (score == 300) {
        getStatus.innerText = `Гуру`
    } else if (score == 1000) {
        getStatus.innerText = `Бог`
    }
})

getResetButton.addEventListener('click', function () {
    score = 0;
    getBalance.innerHTML = `${score}`
    getStatus.innerText = `Новичок`
    getHorseImage.setAttribute('src', 'img/horse-1.png')
})
