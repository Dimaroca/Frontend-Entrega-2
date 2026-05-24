const arrows = document.querySelectorAll(".arrow");

arrows.forEach(arrow => {

    arrow.addEventListener("click", () => {

        const sliderId = arrow.dataset.slider;
        const direction = Number(arrow.dataset.direction);

        const slider = document.getElementById(sliderId);

        if(direction > 0){

            const firstCard = slider.firstElementChild;

            slider.appendChild(firstCard);

        }
        else{

            const lastCard = slider.lastElementChild;

            slider.insertBefore(
                lastCard,
                slider.firstElementChild
            );

        }

    });

});