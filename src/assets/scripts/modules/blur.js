function blurfunc() {
    var blur = (function () {
        var wrapper = document.querySelector('.what-about__connect'),
            blur = document.querySelector('.what-about__blur');

            return {
                set: function () {
                    var imgWidth = document.querySelector('.what-about').offsetWidth,
                        posLeft = -wrapper.offsetLeft,
                        posTop = -wrapper.offsetTop,
                        blurCSS = blur.style;

                    blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
                }
            }
    }());

    blur.set();

    window.onresize = function () {
        blur.set();
    }
}
module.exports={ blurfunc };