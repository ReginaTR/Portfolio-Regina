let btnMenuAbrir = document.getElementById('btn-abrir-menu')
let menuMobile = document.getElementById('menu-mobile')
let overlayMenu = document.getElementById('overlay-menu')

btnMenuAbrir.addEventListener('click', ()=>{
    menuMobile.classList.add('abrir-menu')
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu')
})
overlayMenu.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu')
})