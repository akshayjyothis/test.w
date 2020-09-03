//jshint esversion:6

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const hide = document.querySelector('.section');
    const footer = document.querySelector('.footer');

    burger.addEventListener("click" , () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
        hide.classList.toggle("active");
        footer.classList.toggle("active");
    });
};

navSlide();