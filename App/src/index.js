import '../src/styles/main.scss';
import { Map } from './map';
import Swiper from 'swiper';
import 'swiper/css';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import * as bootstrap from 'bootstrap'

document.addEventListener("DOMContentLoaded", function () {
  let mapElement = document.getElementById('map');

  Map.loadGoogleMapsApi().then(function (googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });
});

const images = [
  { elementId: 'img1', src: img1 },
  { elementId: 'img2', src: img2 },
  { elementId: 'img3', src: img3 }
];


images.forEach(image => {
  const imgElement = document.getElementById(image.elementId);
  if (imgElement) {
    imgElement.src = image.src;
  }
});

const contentImg = document.getElementById('contentImg');
contentImg.src = img4;

const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize(); 