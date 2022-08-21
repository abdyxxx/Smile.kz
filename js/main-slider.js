const swiper = new Swiper('.main-slider',{
    pagination: {
        el: '.main-slider__pag',
        clickable: true,
    },
    loop: true,
    direction: 'vertical',
    initialSlide: 2,
    slideActiveClass: 'main-slider__active',
});
swiper.height = 800

let mainPrev = document.querySelector('.main-slider__prev');
let mainNext = document.querySelector('.main-slider__next');

mainPrev.addEventListener('click', () => {
    swiper.slidePrev();
})
mainNext.addEventListener('click', () => {
    swiper.slideNext();
})

let mainImg = document.querySelector('.main__img');
let mainWrap = document.querySelector('.main-slider__wrapper');
let mainSlide = document.querySelector('.main-slider__slide');
let mainMobile = document.querySelector('.main-mobile');

window.onresize = () => {
    mainWrap.style.height = mainImg.clientHeight + 'px';
    mainMobile.style.height = mainMobile.clientWidth * 1.36 + 'px';
    mainSlide.style.height = mainImg.clientHeight + 'px';
}

mainWrap.style.height = mainImg.clientHeight + 'px';
mainMobile.style.height = mainMobile.clientWidth * 1.36 + 'px';
mainSlide.style.height = mainImg.clientHeight + 'px';