function preloaderfunc() {
    document.body.onload = function() {
        setTimeout(function() {
            var preloader = document.querySelector(".preloader");
            if( !preloader.classList.contains("preloader--none")) {
                preloader.classList.add("preloader--none");
            }
        }, 2000);
    }
}

module.exports={ preloaderfunc };