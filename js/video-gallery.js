let videoSwiper = new Swiper('.video-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.main-slider__pag',
        clickable: true,
        dynamicBullets: true,
    },
    
    })