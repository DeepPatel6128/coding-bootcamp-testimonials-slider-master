const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow')
const tanya = document.querySelector('.tanya')
const john = document.querySelector('.john')
const slide = document.querySelector('#slide-show')

leftArrow.addEventListener('click', ()=>{
    slide.classList.add('slide-left');
    tanya.classList.remove('active');
    john.classList.add('active');
})
rightArrow.addEventListener('click', ()=>{
    slide.classList.remove('slide-left');
    tanya.classList.add('active');
    john.classList.remove('active');
})