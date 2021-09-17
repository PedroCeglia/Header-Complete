// Widgets
let imagens = document.querySelectorAll("#header-carrosel .ic")
let left = document.querySelector("#left")
let right = document.querySelector("#right")
let toggler_open = document.querySelector(".toggle-button.open")
let toggler_close = document.querySelector(".toggle-button.close")
let header_nav = document.querySelector("#header-nav")

// Models
let time = 3000
let indexImg = 0
let max = imagens.length

// Functions
function proximaImagem() {
    imagens[indexImg].classList.remove('select')

    if (indexImg >= max-1){ indexImg = 0 }else { indexImg++ }

    imagens[indexImg].classList.add('select')
}
function voltarImagem() {
    imagens[indexImg].classList.remove('select')

    if (indexImg <= 0 ){ indexImg = max-1 }else {indexImg-- }

    imagens[indexImg].classList.add('select')  
}
function exibirNav() {
    toggler_open.classList.add('sumir')
    toggler_close.classList.remove('sumir')
    header_nav.classList.remove('sumir')
}
function sumirNav() {
    toggler_open.classList.remove('sumir')
    toggler_close.classList.add('sumir')
    header_nav.classList.add('sumir')
}
function start() {
    setInterval(()=>{
        proximaImagem()
    }, time)
}

// Events
left.addEventListener('click', voltarImagem)
right.addEventListener('click', proximaImagem)
toggler_open.addEventListener('click', exibirNav)
toggler_close.addEventListener('click', sumirNav)
window.addEventListener('load', start)
