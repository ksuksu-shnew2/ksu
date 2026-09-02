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


gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    lerp: 0.065,
    smoothWheel: true,
    wheelMultiplier: 0.55,
    anchors: true,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

function initMastersSlider() {
    const section = document.querySelector(".masters");

    const slider = document.querySelector(
        ".masters__fotoslider"
    );

    const track = document.querySelector(
        ".masters__track"
    );

    if (!section || !slider || !track) return;


    // Возвращаем ленту в начало
    gsap.set(track, {
        y: 0
    });


    // Насколько лента должна подняться вверх
    function getScrollDistance() {
        return Math.max(
            0,
            track.scrollHeight - slider.clientHeight
        );
    }


   
const scrollDistance = getScrollDistance();
const overlapDistance = window.innerHeight;

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: section,
        start: "top top",

        end: () =>
            `+=${getScrollDistance() + window.innerHeight}`,

        // scrub: 1,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
    },
});

// Сначала прокручиваются все карточки
timeline.to(track, {
    y: () => -getScrollDistance(),
    ease: "none",
    duration: scrollDistance,
});

// Потом карточки стоят, а форма наезжает
timeline.to({}, {
    duration: overlapDistance,
});
}


// ==========================
// ЛАЙК + ЧАСТИЦЫ
// ==========================
function initHearts() {
    const hearts = document.querySelectorAll(".masters__heart");

    hearts.forEach((heart) => {
        heart.addEventListener("click", () => {
            const isActive = heart.classList.toggle("masters__heart_active");
            if (!isActive) return;

            const particleCount = 24;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement("span");
                particle.classList.add("masters__particle");

                const size = 2 + Math.random() * 5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;

                const angle = ((Math.PI * 2) / particleCount) * i;
                const distance = 70 + Math.random() * 90;

                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                particle.style.setProperty("--x", `${x}px`);
                particle.style.setProperty("--y", `${y}px`);

                heart.appendChild(particle);

                particle.addEventListener("animationend", () => particle.remove());
            }
        });
    });
}

initMastersSlider();
initHearts();

function initBookEffect() {
    const pages = gsap.utils.toArray(
        ".works, .about, .aboutus, .process, .service, .masters, .forms"
    );

    pages.forEach((page) => {
        gsap.fromTo(
            page,
            {
               
                boxShadow: "0 -30px 70px rgba(0, 0, 0, 0.35)",
            },
            {
                
                boxShadow: "0 -5px 20px rgba(0, 0, 0, 0)",
                ease: "none",

                scrollTrigger: {
                    trigger: page,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    // scrub: 1.8,
                },
            }
        );
    });
}

initBookEffect();

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

const languageLinks = document.querySelectorAll(".header__link-lang");

languageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        languageLinks.forEach((item) => {
            item.classList.remove("is-active");
            item.removeAttribute("aria-current");
        });

        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
    });
});

try {
	const validator = new JustValidate('.forms__form');
	validator
	.addField('#name', [
    {
      rule: 'required',
	  errorMessage: "",
    },
    {
      rule: 'minLength',
      value: 2,
	//   errorMessage: "Minimum 2 chars!",
    },
  ],
{
        errorLabelStyle: {
            display: 'none',
        },
    })
  .addField('#email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ],{
        errorLabelStyle: {
            display: 'none',
        },
    })
  .addField('#username', [
    {
      rule: 'required',
	//   errorMessage: "Please fill the username",
    },
    {
      rule: 'minLength',
      value: 2,
	//   errorMessage: "Minimum 2 chars!",
    },
  ],{
        errorLabelStyle: {
            display: 'none',
        },
    })
  .addField('#describe', [
    {
      rule: 'required',
	//   errorMessage: "Please fill the describe",
    },
    {
      rule: 'minLength',
      value: 2,
	//   errorMessage: "Minimum 2 chars!",
    },
  ],{
        errorLabelStyle: {
            display: 'none',
        },
    })
   .addField('#size', [
    {
      rule: 'required',
	//   errorMessage: "Please fill the size",
    },
    {
      rule: 'minLength',
      value: 2,
	//   errorMessage: "Minimum 1 chars!",
    },
  ],{
        errorLabelStyle: {
            display: 'none',
        },
    })
    .addField(
    '#checkbox',
    [
        {
            rule: 'required',
            errorMessage: 'Please confirm your consent',
        },
    ])
     .addField(
    '#checkbox-policy',
    [
        {
            rule: 'required',
            errorMessage: 'Please confirm your consent',
        },
    ],
    // {
    //     errorsContainer: document.querySelector('.checkbox-error-message'),
    // }
    )

    
}catch (e) {}