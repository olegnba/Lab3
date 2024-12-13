document.addEventListener("DOMContentLoaded", () => {
    const burgerMenuButton = document.querySelector('.burger-menu');
    const navbarMenu = document.querySelector('.menu');

    burgerMenuButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
    });
});
