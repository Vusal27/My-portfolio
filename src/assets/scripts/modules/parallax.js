function parallaxfunc() {
    const parallaxContainer = document.querySelector('.parallax');
    const layers = document.querySelector('.parallax__layer');

    const movelayers = e => {
        const initialX = (window.innerWidth / 2) - e.pageX;
        const initialY = (window.innerHeight / 2) - e.pageY;
        
        const divider = 0.03;
        const positionX = initialX * divider;
        const positionY = initialY * divider;
        const bottomPosition = (window.innerHeight / 2) * divider;
        const image = layers.firstElementChild;

        image.style.bottom = `-${bottomPosition}px`;
        layers.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }
    window.addEventListener('mousemove', movelayers)
};
parallaxfunc();
export { parallaxfunc };