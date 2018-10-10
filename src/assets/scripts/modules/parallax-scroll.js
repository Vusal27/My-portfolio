function parallaxScroll() {
    let parallax = (function () {
        const infoPerson = document.querySelector('.user');

        return {
        move: function (block, windowScroll, strafeAmount) {
            let strafe = windowScroll / -strafeAmount + '%';
            let transformString = 'translate3d(0, ' + strafe + ', 0)';
            let style = block.style;
            style.transform = transformString;
            style.webkitTransform = transformString;

        },
        init: function (wScroll) {
            this.move(infoPerson, wScroll, 20);
        }
        }
    }());

    window.onscroll = function () {
        let wScroll = window.pageYOffset;
        parallax.init(wScroll);
    }
}
module.exports={ parallaxScroll };