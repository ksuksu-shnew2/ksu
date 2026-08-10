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