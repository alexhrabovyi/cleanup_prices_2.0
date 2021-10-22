function closeChildrenElements(content) {

    let dropdown_buttons = content.querySelectorAll(".dropdown-button");

    for (let j = 0; j < dropdown_buttons.length; j++) {

        dropdown_buttons[j].classList.remove("dropdown-button_medium_active");
        dropdown_buttons[j].classList.remove("dropdown-button_small_active");
    }

    let dropdown_content = content.querySelectorAll(".dropdown-content");

    for (let k = 0; k < dropdown_content.length; k++) {

        dropdown_content[k].style.maxHeight = null;
    }

    let dropdown_arrows = content.querySelectorAll(".arrow-down");

    for (let l = 0; l < dropdown_arrows.length; l++) {

        dropdown_arrows[l].classList.remove("arrow-down_active");
    }
}

function arrowDownAnimation(button, i) {

    let arrow_down = button[i].querySelector(".arrow-down");

    arrow_down.classList.toggle("arrow-down_active")
}

let dropdown_buttons_main = document.querySelectorAll(".dropdown-button_main");

for (let i = 0; i < dropdown_buttons_main.length; i++) {

    dropdown_buttons_main[i].addEventListener("click", () => {

        dropdown_buttons_main[i].classList.toggle("dropdown-button_main_active");

        let dropdown_content_main = dropdown_buttons_main[i].nextElementSibling;

        if (dropdown_content_main.style.maxHeight) {

            dropdown_content_main.style.maxHeight = null;
        } else {

            dropdown_content_main.style.maxHeight = dropdown_content_main.scrollHeight + "px";
        }

        arrowDownAnimation(dropdown_buttons_main, i);

        closeChildrenElements(dropdown_content_main);
    })
}

let dropdown_buttons_medium = document.querySelectorAll(".dropdown-button_medium");

for (let i = 0; i < dropdown_buttons_medium.length; i++) {

    dropdown_buttons_medium[i].addEventListener("click", () => {

        dropdown_buttons_medium[i].classList.toggle("dropdown-button_medium_active");

        let dropdown_content_medium = dropdown_buttons_medium[i].nextElementSibling;
        let dropdown_content_main = dropdown_buttons_medium[i].parentElement;

        if (dropdown_content_medium.style.maxHeight) {

            dropdown_content_medium.style.maxHeight = null;
        } else {

            dropdown_content_medium.style.maxHeight = dropdown_content_medium.scrollHeight + "px";
            dropdown_content_main.style.maxHeight = dropdown_content_main.scrollHeight + dropdown_content_medium.scrollHeight + "px";
        }

        arrowDownAnimation(dropdown_buttons_medium, i);

        closeChildrenElements(dropdown_content_medium);
    })
}

let dropdown_buttons_small = document.querySelectorAll(".dropdown-button_small");

for (let i = 0; i < dropdown_buttons_small.length; i++) {

    dropdown_buttons_small[i].addEventListener("click", () => {

        dropdown_buttons_small[i].classList.toggle("dropdown-button_small_active");

        let dropdown_content_small = dropdown_buttons_small[i].nextElementSibling;
        let dropdown_content_medium = dropdown_buttons_small[i].parentElement;
        let dropdown_content_main = dropdown_content_medium.parentElement;

        if (dropdown_content_small.style.maxHeight) {

            dropdown_content_small.style.maxHeight = null;
        } else {

            dropdown_content_small.style.maxHeight = dropdown_content_small.scrollHeight + "px";
            dropdown_content_medium.style.maxHeight = dropdown_content_medium.scrollHeight + dropdown_content_small.scrollHeight + "px";
            dropdown_content_main.style.maxHeight = dropdown_content_main.scrollHeight + dropdown_content_medium.scrollHeight + dropdown_content_small.scrollHeight + "px";
        }

        arrowDownAnimation(dropdown_buttons_small, i);
    })
}