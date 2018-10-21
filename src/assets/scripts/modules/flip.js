function flipfunc() {
    const flip = document.querySelector('.flip');
    const authButton = document.querySelector('.auth');
    const mainPage = document.querySelector('.nav__link--main--page');

    authButton.addEventListener('click', addClass);
    mainPage.addEventListener('click', removeClass);

    function addClass() {
        flip.classList.add("active");
        authButton.classList.add("auth--none");
    }
    function removeClass() {
        flip.classList.remove("active");
        authButton.classList.remove("auth--none");
    }
}
module.exports={ flipfunc };