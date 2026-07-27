import "purecss/build/grids-min.css"
import "purecss/build/grids-responsive-min.css"

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../sass/style.scss";

const swiper = new Swiper('.works__slider', {

    slidesPerView: 1,
    loop: true,

    navigation: {
		nextEl: ".icon-right-open",
		prevEl: ".icon-left-open",
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
    
    breakpoints: {
    
    // when window width is >= 320px
    1200: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 480px
    1920: {
      spaceBetween: 35,
      slidesPerView: 3

    }
  },
  modules: [Navigation, Pagination],

  
});