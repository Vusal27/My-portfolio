function burgerMenufunc() {
    var burgerMenu = document.querySelector('.burger');

    burgerMenu.addEventListener('click', toggleClass);


    function toggleClass() {
        burgerMenu.classList.toggle("burger--active");
    }
}
module.exports={ burgerMenufunc };