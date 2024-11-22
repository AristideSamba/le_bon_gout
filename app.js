const menu = document.querySelector('.burger-menu');
const navMenu = document.querySelector(' nav');
let carousel = document.querySelector('.carousel');
let items = carousel.querySelectorAll('.list .item');
let dots = document.querySelectorAll('.carousel .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');


let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let autoPlay;
const startAutoPlay = () =>{
    clearInterval(autoPlay);
    autoPlay = setInterval(() =>{
        next.click();
    }, 10000)
}
startAutoPlay();

const setSlider = () =>{
    let itemActiveOld = carousel.querySelector('.list .item.active');
    if(itemActiveOld){
        itemActiveOld.classList.remove('active');
    }
    items[active].classList.add('active');

    let dotActiveOld = document.querySelector('.carousel .dots li.active');
    if(dotActiveOld){
        dotActiveOld.classList.remove('active');
    } 
    dots[active].classList.add('active');
    startAutoPlay();
}
setSlider();

 next.onclick = () =>{
    active = active + 1 > lastPosition ? 0 : active + 1;
    carousel.style.setProperty('--calculation', 1);
    setSlider();
    }

 prev.onclick = () =>{
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    carousel.style.setProperty('--calculation', -1);
    setSlider();
    }


 dots.forEach((item, position) =>{
    item.onclick = () => {
        active = position;
        setSlider();
    }
 })

 menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
 })

 document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active");
    navMenu.classList.remove("active");
 }))