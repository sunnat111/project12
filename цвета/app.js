let fone = document.querySelector('.first__one')
let ftwo = document.querySelector('.first__two')
let fthree = document.querySelector('.first__three')
let ffour = document.querySelector('.first__four')
let body = document.querySelector('body')

let sone = document.querySelector('.second__one')
let stwo = document.querySelector('.second__two')
let sthree = document.querySelector('.second__three')
let sfour = document.querySelector('.second__four')

let item = document.querySelector('.box__item')
let s = document.querySelector('.box__items')
let th = document.querySelector('.box__itemth')
let fo = document.querySelector('.box__itemfo')
let fi = document.querySelector('.box__itemfi')
let six = document.querySelector('.box__itemsi')


fone.addEventListener('click', () =>{
    body.style.background = 'black';
})
ftwo.addEventListener('click', () =>{
    body.style.background = 'red';
})
fthree.addEventListener('click', () =>{
    body.style.background = 'blue';
})
ffour.addEventListener('click', () =>{
    body.style.background = '';
})

sone.addEventListener('click', () =>{
    item.style.background = 'black'
    s.style.background = 'black'
    th.style.background = 'black'
    fo.style.background = 'black'
    fi.style.background = 'black'
    six.style.background = 'black'
})
stwo.addEventListener('click', () =>{
    item.style.background = 'red'
    s.style.background = 'red'
    th.style.background = 'red'
    fo.style.background = 'red'
    fi.style.background = 'red'
    six.style.background = 'red'
})
sthree.addEventListener('click', () =>{
    item.style.background = 'blue'
    s.style.background = 'blue'
    th.style.background = 'blue'
    fo.style.background = 'blue'
    fi.style.background = 'blue'
    six.style.background = 'blue'
})
sfour.addEventListener('click', () =>{
    item.style.background = ''
    s.style.background = ''
    th.style.background = ''
    fo.style.background = ''
    fi.style.background = ''
    six.style.background = ''
})