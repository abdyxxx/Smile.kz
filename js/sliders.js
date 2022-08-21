const swiper = new Swiper('.main-slider',{
    pagination: {
        el: '.main-slider__pag',
        clickable: true,
    },
    navigation: {
        nextEl: '.main-slider__next',
        prevEl: '.main-slider__prev'
    },
    loop: true,
    direction: 'vertical',
    initialSlide: 2,
    slideActiveClass: 'main-slider__active',
});
swiper.height = 800
let d = document;

swiper.ondbclick = (e) => e.preventDefault()

const videoSwiper = new Swiper('.video-swiper', {
    navigation: {
        nextEl: '.video-swiper__next',
        prevEl: '.video-swiper__prev'
    },    
    loop: true,
    })

const doctorsSwiper = new Swiper('.doctors-swiper', {
    navigation: {
        nextEl: '.doctors-swiper__next',
        prevEl: '.doctors-swiper__prev'
    },    
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    slideActiveClass: 'doctors-active',
    on: {
        slideChangeTransitionEnd: doctorsNameChange,
        afterInit: doctorsNameInit,
        },
    breakpoints: {
        767: {
            slidesPerGroup: 3,
            },
        }
    },
    );

    function doctorsNameInit(){
        document.querySelector('.doctors__name').innerHTML = document.querySelector('.doctors-active').dataset.surname
    }

    function doctorsNameChange(){
        document.querySelector('.doctors__name').innerHTML = document.querySelector('.doctors-active').dataset.surname
    }

const feedbackSwiper = new Swiper('.feedback-swiper', {
    navigation: {
        nextEl: '.feedback-swiper-next',
        prevEl: '.feedback-swiper-prev'
    },    
    loop: true,
})

const achievementsSwiper = new Swiper('.achievements-swiper', {
    navigation: {
        nextEl: '.achievements-swiper-next',
        prevEl: '.achievements-swiper-prev'
    },        
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        1600: {
            spaceBetween: 20,
        }
    },
})

let achievementsPrev = document.querySelector('.achievementsPrev');
let achievementsNext = document.querySelector('.achievementsNext');

achievementsPrev.addEventListener('click', () => {
    achievementsSwiper.slidePrev();
})
achievementsNext.addEventListener('click', () => {
    achievementsSwiper.slideNext();
})

let mainPrev = document.querySelector('.main-slider__prev');
let mainNext = document.querySelector('.main-slider__next');

mainPrev.addEventListener('click', () => {
    swiper.slidePrev();
})
mainNext.addEventListener('click', () => {
    swiper.slideNext();
})

let doctorsPrev = document.querySelector(".doctors-swiper__prev");
let doctorsNext = document.querySelector('.doctors-swiper__next');

doctorsPrev.addEventListener('click', () => {
    doctorsSwiper.slidePrev();
})
doctorsNext.addEventListener('click', () => {
    doctorsSwiper.slideNext();
})

let absBtn = document.querySelector('.absolute-btn');

let mainImg = document.querySelector('.main__img');
let mainWrap = document.querySelector('.main-slider__wrapper');
let mainSlide = document.querySelector('.main-slider__slide');
let mainMobile = document.querySelector('.main-mobile');

function resizeSlider(){
    mainWrap.style.height = mainImg.clientHeight + 'px';
    mainMobile.style.height = mainMobile.clientWidth * 1.36 + 'px';
    mainSlide.style.height = mainImg.clientHeight + 'px';
}

alert('')

mainWrap.style.height = mainImg.clientHeight + 'px';
mainMobile.style.height = mainMobile.clientWidth * 1.36 + 'px';
mainSlide.style.height = mainImg.clientHeight + 'px';

window.addEventListener('resize', );