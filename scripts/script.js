new Swiper(".slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    loop: true,
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
});

// const modalImageCloseBtn = document.querySelector(".modal-image__close");
// const mail = document.querySelector(".company-info__mail");
// const modalImageContent = document.querySelector(".modal-image__content");

// mail.addEventListener("click", () => {
//     modalImage.classList.add("active");
//     document.body.style.overflow = "hidden";
// });

// modalImageCloseBtn.addEventListener("click", () => {
//     modalImage.classList.remove("active");
//     document.body.style.overflow = "";
// });

// modalImage.addEventListener("click", (e) => {
//     if (!modalImageContent.contains(e.target)) {
//         modalImage.classList.remove("active");
//         document.body.style.overflow = "";
//     }
// });


