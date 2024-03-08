const setButtons = document.querySelectorAll('.ppdt-set-buttons a button')
const selectAlert = document.querySelector('.select-alert')
const startHeading = document.querySelector('.start h1')
const startButton = document.querySelector('.start-button')
const imageContainer = document.querySelector('.ppdt-content');
const restart = document.querySelector('.restart')
const goToTop = document.querySelector('.go-to-top')

const imageFolder = './PPDT Img/';


let ppdtImages = []

setButtons.forEach((setButton, index) => {
    setButton.addEventListener('click', () => {

        selectAlert.style.display = 'none'
        startHeading.style.display = 'block'
        startButton.style.display = 'block'

        displayImage(index)
    })
})

function displayImage(index) {
    startButton.addEventListener('click', () => {

        const startDiv = document.querySelector('.start')
        startDiv.style.display = 'none'

        imageContainer.style.display = 'flex'
        imageContainer.style.backgroundImage = `url('${imageFolder}${images[index]}')`

        setTimeout(() => {
            imageContainer.style.backgroundImage = 'none'
            imageContainer.innerHTML = `<p class="write-action">Write Action</p>`
        }, 1000)
        setTimeout(() => {
            imageContainer.innerHTML = `<p class="write-story">Write Story</p>`
        }, 3000)
        setTimeout(() => {
            imageContainer.style.display = 'none'
            restart.style.display = 'flex'

            goToTop.addEventListener('click', () => {
                setTimeout(() => {
                    location.reload();
                }, 500)
            })
        }, 4000)

    })
}

// IMAGES Array

const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
    '30.jpg',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '34.jpg',
    '35.jpg',
];