let burger = document.querySelector('header');

burger.addEventListener('click', function(){
    burger.classList.toggle('menuBurger');
    menu.style.cssText = "display: contents";
});