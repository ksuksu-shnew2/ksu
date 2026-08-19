import "../sass/style.scss";


const cards = document.querySelectorAll(".about__animation");

cards.forEach((card) => {
    card.addEventListener("click", () => {

        cards.forEach((item) => {
            if (item !== card) {
                item.classList.remove("is-active");
            }
        });

        card.classList.toggle("is-active");
    });
});


const rows = document.querySelectorAll(".service__grid-container");
const img = document.querySelector(".service__img");
const table = document.querySelector(".service__table");
const imgWrapper = document.querySelector(".service__wrapper-img");

import photo1 from "/src/img/service/girl.jpg";
import photo2 from "/src/img/service/2.png";
import photo3 from "/src/img/service/3.png";
import photo4 from "/src/img/service/4.png";
import photo5 from "/src/img/service/5.png";

const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5
    // "/src/img/service/girl.jpg",
    // "/src/img/service/2.png",
    // "/src/img/service/3.png",
    // "/src/img/service/4.png",
    // "/src/img/service/5.png"
];

let currentImage = "";

rows.forEach((row) => {
    row.addEventListener("mouseenter", () => {

        // Убираем активный класс у всех строк
        rows.forEach((item) => {
            item.classList.remove("service__grid-container_active");
        });

        // Подсвечиваем текущую строку
        row.classList.add("service__grid-container_active");


        // Выбираем случайную картинку
        let randomImage;

        do {
            const random = Math.floor(Math.random() * images.length);
            randomImage = images[random];
        } while (randomImage === currentImage);

        currentImage = randomImage;


        // Убираем прошлую анимацию
        imgWrapper.classList.remove("service__wrapper-img_active");

        // Меняем картинку
        img.src = randomImage;

        // Перезапускаем анимацию
        void imgWrapper.offsetWidth;

        // Запускаем анимацию фото + банта вместе
        imgWrapper.classList.add("service__wrapper-img_active");
    });

});

// Ушли полностью с таблицы
table.addEventListener("mouseleave", () => {
    imgWrapper.classList.remove("service__wrapper-img_active");

    rows.forEach((item) => {
        item.classList.remove("service__grid-container_active");
    });
});

 var swiper = new Swiper('.mySwiper', {
    direction: 'vertical',
    slidesPerView: 1.001,
    spaceBetween: 40,
    loop: true,
    speed: 800,

    navigation: {
        nextEl: ".masters__arrow--next",
        prevEl: ".masters__arrow--prev",
    },
});

const masters = document.querySelector(".masters");

let wheelLocked = false;

masters.addEventListener("wheel", (e) => {
    const goingDown = e.deltaY > 0;
    const goingUp = e.deltaY < 0;

    const isFirst = swiper.realIndex === 0;
    const isLast = swiper.realIndex === swiper.slides.length - 1;

    // На первой карточке разрешаем странице идти вверх
    if (goingUp && isFirst) {
        return;
    }

    // На последней карточке разрешаем странице идти вниз
    if (goingDown && isLast) {
        return;
    }

    // Пока есть куда листать карточки — страницу блокируем
    e.preventDefault();

    if (wheelLocked) return;
    if (Math.abs(e.deltaY) < 40) return;

    wheelLocked = true;

    if (goingDown) {
        swiper.slideNext();
    } else if (goingUp) {
        swiper.slidePrev();
    }

    setTimeout(() => {
        wheelLocked = false;
    }, 850);
}, { passive: false });