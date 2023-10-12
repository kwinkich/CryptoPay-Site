// Swiper

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

let swiper;

const commonSwiperOptions = {
    on: {
        slideChange: function () {
            var currentSlide = swiper.activeIndex + 1;
            document.getElementById('current-slide').textContent = '0' + currentSlide;
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    parallax: true,
};

const verticalSwiperOptions = {
    ...commonSwiperOptions,
    direction: 'vertical',
    mousewheel: {
        mousewheelControl: true,
        eventsTarget: '.usecases__content',
        forceToAxis: true,
        releaseOnEdges: true,
    },
};

const horizontalSwiperOptions = {
    ...commonSwiperOptions,
    direction: 'horizontal',
};

function updateSwiper() {
    const isDesktop = window.innerWidth >= 1060;
    const chosenOptions = isDesktop ? verticalSwiperOptions : horizontalSwiperOptions;

    if (swiper) {
        swiper.destroy(true, true);
    }

    swiper = new Swiper('.swiper', chosenOptions);
}

updateSwiper();

window.addEventListener('resize', updateSwiper);


// Theme and Animation
const videoApp = document.getElementById('app-video');
const videoExchange = document.getElementById('exchange-video');
const videoStat = document.getElementById('stat-video');
const videoSendCoins = document.getElementById('send-coins-video');
const videoAnonymous = document.getElementById('anonymous-video');

const animationElements = [
    { element: document.querySelector('.features-block__app-block'), video: videoApp },
    { element: document.querySelector('.features-block__exchange-block'), video: videoExchange },
    { element: document.querySelector('.features-block__stat-block'), video: videoStat },
    { element: document.querySelector('.features-block__send-coins'), video: videoSendCoins },
    { element: document.querySelector('.features-block__anonymous'), video: videoAnonymous },
];

animationElements.forEach(({ element, video }) => {
    element.addEventListener('mouseenter', () => {
        video.play();
    });

    element.addEventListener('mouseleave', () => {
        video.pause();
    });
});

const switchButton = document.getElementById('switch-theme');

document.querySelector('.header__switch-theme').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    addDarkClass();
});

function addDarkClass() {
    try {
        const isDarkTheme = localStorage.getItem('theme') === 'dark';
        const htmlElement = document.querySelector('html');
        const darkVideoSuffix = isDarkTheme ? '_dark' : '';
        
        htmlElement.classList.toggle('dark', isDarkTheme);
        
        videoApp.src = `./static/One click to start${darkVideoSuffix}.mp4`;
        videoExchange.src = `./static/Real-timeexchange${darkVideoSuffix}.mp4`;
        videoSendCoins.src = `./static/Send coins to users${darkVideoSuffix}.mp4`;
        videoApp.poster = `./static/Group 5116${darkVideoSuffix}.png`;
        videoExchange.poster = `./static/features-block_img${darkVideoSuffix}.png`;
        videoSendCoins.poster = `./static/send-coins${darkVideoSuffix}.png`;
        switchButton.src = `./static/${isDarkTheme ? 'dark' : 'light'}.svg`;
    } catch (err) {}
}

addDarkClass();



gsap.from(".header", {
    opacity: 0,
    duration: 1,
});

gsap.from(".main__h1-title, .main__paragraph, .main__get-started-btn-block, .main__avatar, .main__avatar-p", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
});

gsap.from(".main__second-col", {
    x: 100,
    opacity: 0,
    duration: 1,
});

gsap.from(".features-block__currencies-content, .features-block__currencies-h3, .features-block__currencies-paragraph, .eth, .usdt, .ton, .btc, .trx, .ltc, .usdc, .bnb", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".features-block__content",
        start: "top center",
        end: "bottom center",
    }
});

gsap.from(".features-block__app-block, .features-block__app-animation, .features-block__app-h3, .features-block__app-paragraph", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".features-block__content",
        start: "top+=250px center",
        end: "bottom center",
    }
});

gsap.from(".features-block__stat-block, .features-block__stat-animation, .features-block__stat-h3, .features-block__stat-paragraph", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".features-block__content",
        start: "top+=450px center",
        end: "bottom center",
    }
});

gsap.from(".features-block__exchange-block, .features-block__exchange-animation, .features-block__exchange-h3, .features-block__exchange-paragraph", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".features-block__content",
        start: "top+=550px center",
        end: "bottom center",
    }
});

gsap.from(".features-block__send-coins, .features-block__send-coins-animation, .features-block__send-coins-h3, .features-block__send-coins-paragraph", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".features-block__content",
        start: "top+=1150px center",
        end: "bottom center",
    }
});

gsap.from(".features-block__anonymous, .features-block__anonymous-animation, .features-block__anonymous-h3, .features-block__anonymous-paragraph", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".features-block__content",
        start: "top+=1150px center",
        end: "bottom center",
    }
});

gsap.from(".quick-start__title", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".quick-start",
        start: "top+=50px center",
        end: "bottom center",
    }
});

gsap.from(".quick-start__step-1-img-block", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".quick-start",
        start: "top+=190px center",
        end: "bottom center",
    }
});

gsap.from(".quick-start__step-1-numstep, .quick-start__step-1-h3, .quick-start__step-1-list-item", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".quick-start",
        start: "top+=190px center",
        end: "bottom center",
    }
});


gsap.from(".quick-start__step-2-img-block", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".quick-start",
        start: "top+=590px center",
        end: "bottom center",
    }
});

gsap.from(".quick-start__step-2-numstep, .quick-start__step-2-h3, .quick-start__step-2-p, .quick-start__step-2-list-item", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".quick-start",
        start: "top+=590px center",
        end: "bottom center",
    }
});


gsap.from(".quick-start__step-3-img-block", {
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".quick-start",
        start: "top+=1190px center",
        end: "bottom center",
    }
});

gsap.from(".quick-start__step-3-numstep, .quick-start__step-3-h3, .quick-start__step-3-p, .quick-start__step-3-list-item", {
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".quick-start",
        start: "top+=1190px center",
        end: "bottom center",
    }
});

gsap.from(".api-block__content, .api-block__h2, .api-block__p, .api-block__button-block, .api-block__img-block, .api-block__img-block-mobile", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".api",
        start: "top+=90px center",
        end: "bottom center",
    }
});

gsap.from(".community-block__h2, .community-block__p, .community-block__libraries-js, .community-block__libraries-net, .community-block__libraries-php, .community-block__libraries-python, .community-block__libraries-go, .community-block__button-block", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".community-block",
        start: "top+=30px center",
        end: "bottom center",
    }
});