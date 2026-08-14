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