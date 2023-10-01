const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");
const modalClose = document.querySelector(".modal-close");
const modalTitle = document.querySelector(".modal-form__title");
const modalContent = document.querySelector(".modal-content");
const feedBackBtn = document.querySelector(".contacts-feedback__question");
let activeStatus = "";
const textArea = document.querySelector(".textarea-container");

function clickButton(title) {
    modalTitle.innerHTML = title;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    cleanForm();
}

Array.from(document.querySelectorAll(".button-order")).forEach((el) => {
    el.addEventListener("click", () => {
        textArea.classList.add("hidden");
        textArea.querySelector("textarea").classList.remove("req");
        clickButton("Сделать заказ");
        activeStatus = "order";
    });
});

feedBackBtn.addEventListener("click", () => {
    textArea.classList.remove("hidden");
    textArea.querySelector("textarea").classList.add("req");
    clickButton("Задать вопрос");
    activeStatus = "question";
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
        closeModal();
    }
});

// form

const form = document.querySelector("#form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("siiiiu");

    const error = formValidate(form);
    if (error) return;

    const submit = document.querySelector(".submit");
    submit.classList.add("loading");
    const formData = new FormData(form);

    const response = await fetch("http://localhost/metall/sendmail.php", {
        method: "POST",
        body: formData,
    });
    submit.classList.remove("loading");
    modal.classList.remove("active");
    document.body.style.overflow = "";

    if (response.ok) {
        const result = response.json();
        form.reset();
    }
});

function formValidate(form) {
    let hasError = false;
    const fields = document.querySelectorAll(".req");

    for (let id = 0; id < fields.length; id++) {
        const input = fields[id];
        formRemoveError(input);

        if (!input.value || phoneTest(input) || emailTest(input)) {
            formAddError(input);
            hasError = true;
            continue;
        }
    }

    return hasError;
}

function formAddError(input) {
    input.classList.add("error");
}

function formRemoveError(input) {
    input.classList.remove("error");
}

function phoneTest(input) {
    return input.id == "phone" && !/^79\d{9}$/.test(input.value);
}

function cleanForm() {
    Array.from(document.querySelectorAll(".req")).forEach((el) => {
        el.classList.remove("error");
    });
}

function emailTest(input) {
    return (
        input.id == "email" &&
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    );
}
