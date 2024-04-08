import swiper from './modules/swiper.js';
import swiper2 from './modules/swiper.js';
import swiper3 from './modules/swiper.js';
import swiper4 from './modules/swiper.js';
import swiper5 from './modules/swiper.js';
import topFunction from './modules/scroll-top.js';
topFunction();


import Parallax from './modules/parallax.js'
var scene = document.getElementById('scene');

var parallax = new Parallax(scene, {
    hoverOnly: true,
    relativeInput: true
});



import WOW from './modules/wow.min.js';
new WOW().init();


// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();


function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top_btn").style.display = "block";
} else {
    document.getElementById("top_btn").style.display = "none";
}
}


window.onscroll = function() {
    scrollFunction()
};
