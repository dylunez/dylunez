// -----------------------------
// NAVIGATION + OVERLAY
// -----------------------------
const navBtn = document.querySelectorAll('.nav__btn--toggle');
const navBtnBurger = document.querySelector('.nav__btn--burger');
const overBtnClose = document.querySelector('.overlay__btn--close');
const navOverlay = document.getElementById('nav-overlay');
const navItem = document.querySelectorAll('.overlay__item');

navBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        navOverlay.classList.toggle('overlay--active');

        const isMenuOpen = navOverlay.classList.contains('overlay--active');

        btn.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');
        navOverlay.hidden = !isMenuOpen;

        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    });
});

navItem.forEach(item => {
    item.addEventListener('click', () => {
        navOverlay.classList.remove('overlay--active');
        navOverlay.hidden = true;

        navBtnBurger.setAttribute('aria-expanded', 'false');

        document.body.style.overflow = '';
    });
});


// -----------------------------
// OBETENER ALTURA DEL ANV
// -----------------------------
const nav = document.querySelector("nav");

function setNavHeight() {
    const height = nav.offsetHeight;
    document.documentElement.style.setProperty("--nav-height", `${height}px`);
}

setNavHeight();
window.addEventListener("resize", setNavHeight);


// -----------------------------
// ANIMACIONES Y TRANSICIONES
// -----------------------------

window.addEventListener('load', () => {
    // Secciones que animamos al estar centradas
    const sectionsToAnimate = document.querySelectorAll('.hero, .contact, .phrase');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('contact')) {
                    // Para contact: agregamos in-view porque el CSS lo requiere
                    entry.target.classList.add('in-view');
                } else {
                    // Para otras secciones, usamos animate
                    entry.target.classList.add('animate');
                }
                observer.unobserve(entry.target); // animación solo una vez
            }
        });
    }, {
        root: null,
        threshold: 0,
        rootMargin: '-50% 0px -50% 0px'
    });
    // Observar todas las secciones
    sectionsToAnimate.forEach(section => observer.observe(section));
});