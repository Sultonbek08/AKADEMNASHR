
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.header__list');


//Toggle nav

burger.addEventListener('click', () => {

    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
   
    
});
