const setButtons = document.querySelectorAll('.tat-set-buttons a button')
const selectAlert = document.querySelector('.select-alert')
const startHeading = document.querySelector('.start h1')
const startButton = document.querySelector('.start-button')
const imageContainer = document.querySelector('.tat-content');
const restart = document.querySelector('.restart')
const goToTop = document.querySelector('.go-to-top')

const imageFolder = './TAT Img/';


let tatImages = []

setButtons.forEach((setButton) => {
    setButton.addEventListener('click', () => {

        selectAlert.style.display = 'none'
        startHeading.style.display = 'block'
        startButton.style.display = 'block'

        console.log(setButton.textContent)

        switch (setButton.textContent) {
            case 'Set 1':
                tatImages = images.slice(0, 12)
                console.log(tatImages)
                break;
            case 'Set 2':
                tatImages = images.slice(12, 24)
                console.log(tatImages)
                break;
        }
        startTest(tatImages)
    })
})



function startTest(tatImages) {
    startButton.addEventListener('click', () => {
        console.log(`Start button clicked`);

        const startDiv = document.querySelector('.start')
        startDiv.style.display = 'none'

        let tatIndex = 0;

        function displayImage(tatIndex) {

            imageContainer.style.display = 'flex'

            imageContainer.style.backgroundImage = `url('${imageFolder}${tatImages[tatIndex]}')`;
            setTimeout(() => {
                imageContainer.style.backgroundImage = '';
                setTimeout(displayBlankScreen, 500); // 2+2 => Display blank screen for 4 minutes
            }, 500); // Display image for 30 seconds
        }

        function displayBlankScreen() {
            imageContainer.style.backgroundColor = '#ffffff';
            setTimeout(() => {
                imageContainer.style.backgroundColor = '';
                tatIndex++;
                if (tatIndex < tatImages.length) {
                    displayImage(tatIndex);
                } else if (tatIndex === tatImages.length) {
                    watContent.style.display = 'none'
                    restart.style.display = 'flex'
                    console.log(wattatIndex, watWords.length)

                    goToTop.addEventListener('click', () => {
                        setTimeout(() => {
                            location.reload();
                        }, 500)
                    })

                    return
                }
            }, 0); // 2+2 => Display blank screen for 4 minutes 
        }

        // Start the loop
        displayImage(tatIndex);

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
];