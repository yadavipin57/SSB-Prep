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
    i.style.display = 'none'
})


// Inside media query for screen less than 580px 

const prepMenuList = document.querySelector('.prep-menu-list')

prepMenuList.addEventListener('click', ()=>{
    prepMenuList.classList.toggle('active')
})