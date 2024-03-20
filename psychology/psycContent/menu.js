const menuIcon = document.querySelector('.menu-icon')
const menuUlList = document.querySelector('.menu-ul-list')

const xmark = document.createElement('i')
xmark.className = `fa-solid fa-xmark`

const fullScreen = document.querySelector('.fa-expand')
const reload = document.querySelector('.fa-rotate-right')

// Openning menu

menuIcon.addEventListener('click', () => {
    menuUlList.classList.toggle('active')
    menuUlList.appendChild(xmark)
})

// Closing menu

xmark.addEventListener('click', () => {
    menuUlList.classList.toggle('active')
})

// Test Features

fullScreen.addEventListener('click' ()=>{
    document.requestFullScreen();
})