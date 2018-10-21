function burgerMenufunc() {
    var burgerMenu = document.querySelector('.burger');
    var menu = document.querySelector('.navigate');

    burgerMenu.addEventListener('click', toggleClass);


    function toggleClass() {
        burgerMenu.classList.toggle("burger--active");
        menu.classList.toggle("navigate--active");
    }
}
module.exports={ burgerMenufunc };