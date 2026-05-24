const slider = document.getElementById("mainSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const recommendBtn = document.querySelector(".recommend-btn");

nextBtn.addEventListener("click", function(){

    const firstCard = slider.firstElementChild;

    slider.appendChild(firstCard);

});

prevBtn.addEventListener("click", function(){

    const lastCard = slider.lastElementChild;

    slider.insertBefore(lastCard, slider.firstElementChild);

});

recommendBtn.addEventListener("click", function(){

    window.location.href = "recommendations.html";

});