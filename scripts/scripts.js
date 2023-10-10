import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
const swiper = new Swiper('.swiper', {
    on: {
        slideChange: function () {
        var currentSlide = swiper.activeIndex + 1;
        document.getElementById('current-slide').textContent = '0' + currentSlide;
        },
    },
    // Optional parameters
    direction: 'vertical',
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    parallax:true,
    mousewheel: {
        mousewheelControl: true,
        eventsTarget: '.usecases__content',
        forceToAxis: true,
        releaseOnEdges: true,
    }
});

const animationApp = document.querySelector('.features-block__app-block');
const animationExchange = document.querySelector('.features-block__exchange-block');
const animationStat = document.querySelector('.features-block__stat-block')
const animationSendCoins = document.querySelector('.features-block__send-coins');
const animationAnonymous = document.querySelector('.features-block__anonymous');
const videoApp = document.getElementById('app-video');
const videoExchange = document.getElementById('exchange-video');
const videoStat = document.getElementById('stat-video');
const videoSendCoins = document.getElementById('send-coins-video');
const videoAnonymous = document.getElementById('anonymous-video');

animationApp.addEventListener('mouseenter', () => {
    videoApp.play();
});

animationApp.addEventListener('mouseleave', () => {
    videoApp.pause();
});

animationExchange.addEventListener('mouseenter', () => {
    videoExchange.play();
});

animationExchange.addEventListener('mouseleave', () => {
    videoExchange.pause();
});

animationStat.addEventListener('mouseenter', () => {
    videoStat.play();
});

animationStat.addEventListener('mouseleave', () => {
    videoStat.pause();
});

animationSendCoins.addEventListener('mouseenter', () => {
    videoSendCoins.play();
});

animationSendCoins.addEventListener('mouseleave', () => {
    videoSendCoins.pause();
});

animationAnonymous.addEventListener('mouseenter', () => {
    videoAnonymous.play();
});

animationAnonymous.addEventListener('mouseleave', () => {
    videoAnonymous.pause();
});


try{
    if (localStorage.getItem('theme') === 'dark'){
        document.querySelector('html').classList.add('dark');
        videoApp.src = './static/One click to start_dark.mp4';
        videoExchange.src = './static/Real-timeexchange_dark.mp4'
        videoSendCoins.src = './static/Send coins to users_dark.mp4'
    }
} catch (err) {}