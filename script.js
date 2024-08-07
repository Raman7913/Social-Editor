const menuButtons = document.querySelectorAll(".menu__button");

Array.from(menuButtons).forEach((btn) => {
    btn.addEventListener("click", () => {
        menuButtons.forEach((button) =>
            button.classList.remove("menu__button--active")
        );
        btn.classList.add("menu__button--active");
    });
});
