const menuIcon = document.querySelector('.menu-icon')
const menuUlList = document.querySelector('.menu-ul-list')
const i = document.createElement('i')
i.className = `fa-solid fa-xmark`

// Openning menu

menuIcon.addEventListener('click', () => {
    menuUlList.classList.toggle('active')
    menuUlList.appendChild(i)
})

// Closing menu

i.addEventListener('click', () => {
    menuUlList.classList.toggle('active')
})