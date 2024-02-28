const anchor = document.querySelectorAll('.section a')

const tat = document.querySelector('.tat')
const wat = document.querySelector('.wat')
const srt = document.querySelector('.srt')
const sdt = document.querySelector('.sdt')


// Start Wat function

const startButton = document.querySelector('.start-button')

const watWords = ['Table', 'Chair', 'Fan', 'Lion', 'Dog', 'Cat']

startButton.addEventListener('click', ()=>{
    const startDiv = document.querySelector('.start')
    startDiv.style.display = 'none'
    startWat();
})

let watIndex = 0

function startWat(){
    setInterval(()=>{
        const watContentWords = document.querySelector('.wat-content p')
        watContentWords.innerHTML = watWords[watIndex]
        watIndex++;
    }, 5000)
}