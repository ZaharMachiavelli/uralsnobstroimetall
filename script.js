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

const modal = document.querySelector(".modal");
const modalImage=  document.querySelector(".modal-image");
const modalClose = document.querySelector(".modal-close");
const modalTitle = document.querySelector(".modal-form__title");
const modalContent = document.querySelector(".modal-content");
const feedBackBtn = document.querySelector(".contacts-feedback__question");
const activeStatus = "";
const textArea = document.querySelector(".textarea-container");
const modalImageCloseBtn = document.querySelector(".modal-image__close");
const mail = document.querySelector(".company-info__mail");
const modalImageContent = document.querySelector(".modal-image__content");

function clickButton(title) {
    modalTitle.innerHTML = title;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

Array.from(document.querySelectorAll(".button-order")).forEach((el) => {
    console.log(el);
    el.addEventListener("click", () => {
        textArea.classList.add('hidden');
        clickButton("Сделать заказ");
        activeStatus = title == "order";
    });
});

feedBackBtn.addEventListener("click", () => {
    textArea.classList.remove('hidden');
    clickButton("Задать вопрос");
    activeStatus = title == "order";
});

mail.addEventListener('click', () => {
    modalImage.classList.add('active');
    document.body.style.overflow = "hidden";
})

modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
});

modalImageCloseBtn.addEventListener('click', () => {
    modalImage.classList.remove('active');
    document.body.style.overflow = "";
})

modalImage.addEventListener('click', (e) => {
    if(!modalImageContent.contains(e.target)) {
        modalImage.classList.remove('active');
        document.body.style.overflow = "";
    }
})

modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
});
