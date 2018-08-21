var templates_items_array = document.querySelectorAll(".shop .templates-item");
var template_price;
var modal_container = document.querySelector(".modal-container");
var modal_show_button = document.querySelector(".main-footer .contacts .button");
var modal_close_button = document.querySelector(".modal-container .close");
var features = document.querySelector(".features");
var sliders = document.querySelectorAll(".features-list .features-item");
var sliders_control = document.querySelectorAll(".slider-control-item label");
var timer = setInterval(sliders_animate, 4000);

function sliders_animate() {
    if (sliders[0] != null) {
        if (sliders[0].classList.contains("visually-hidden") && sliders[1].classList.contains("visually-hidden")) {
            sliders[2].classList.remove("js-slider");
            sliders[2].classList.add("visually-hidden");
            sliders[0].classList.remove("visually-hidden");
            sliders[0].classList.add("js-slider");
            sliders_control[0].querySelector("input").checked = true;
            return;
        }
        if (sliders[1].classList.contains("visually-hidden") && sliders[2].classList.contains("visually-hidden")) {
            sliders[0].classList.remove("js-slider");
            sliders[0].classList.add("visually-hidden");
            sliders[1].classList.remove("visually-hidden");
            sliders[1].classList.add("js-slider");
            sliders_control[1].querySelector("input").checked = true;
            return;
        }
        if (sliders[0].classList.contains("visually-hidden") && sliders[2].classList.contains("visually-hidden")) {
            sliders[1].classList.remove("js-slider");
            sliders[1].classList.add("visually-hidden");
            sliders[2].classList.remove("visually-hidden");
            sliders[2].classList.add("js-slider");
            sliders_control[2].querySelector("input").checked = true;
            return;
        }
    }
}

if (features != null) {
    features.addEventListener("mouseover", function (event) {
        clearInterval(timer);
    });
    features.addEventListener("mouseout", function (event) {
        timer = setInterval(sliders_animate, 4000);
    });
}

if (sliders != null) {
    for (let index = 0; index < sliders_control.length; index++) {
        const element = sliders_control[index];
        element.addEventListener("click", function (event) {
            for (let index = 0; index < sliders.length; index++) {
                const element = sliders[index];
                element.classList.add("visually-hidden");
                element.classList.remove("js-slider");
            }
            sliders[index].classList.remove("visually-hidden");
            sliders[index].classList.add("js-slider");
        });
    }
}

if (templates_items_array != null) {
    templates_items_array.forEach(element => {
        element.addEventListener("mouseover", function (event) {
            event.preventDefault();
            element.classList.add("js-header");
            template_price = element.querySelector(".price");
            template_price.classList.remove("visually-hidden");
            template_price.classList.add("js-template-price-show");
        });
        element.addEventListener("mouseout",
            function (event) {
                event.preventDefault();
                element.classList.remove("js-header");
                template_price = element.querySelector(".price");
                template_price.classList.add("visually-hidden");
                template_price.classList.remove("js-template-price-show");
            });
    });
}

modal_show_button.addEventListener("click", function (event) {
    event.preventDefault();
    modal_container.classList.remove("visually-hidden");
    document.querySelector(".modal form input#name").focus();
});

modal_close_button.addEventListener("click", function (event) {
    event.preventDefault();
    modal_container.classList.add("visually-hidden");
    document.querySelector(".modal form").reset();
});