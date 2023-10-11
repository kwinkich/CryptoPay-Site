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
        
        videoApp.src = `./static/One-click-to-start${darkVideoSuffix}.webm`;
        videoExchange.src = `./static/Real-timeexchange${darkVideoSuffix}.webm`;
        videoSendCoins.src = `./static/Send-coins-to-users${darkVideoSuffix}.webm`;
        switchButton.src = `./static/${isDarkTheme ? 'dark' : 'light'}.svg`;
    } catch (err) {}
}

addDarkClass();