const header = document.querySelector('.nav-panel');
const hamburger = document.querySelector('.nav-panel__hamburger');
const menu = document.querySelector('.nav-panel__menu');

if (header && hamburger && menu) {
    hamburger.addEventListener('click', () => {
        const isOpen = header.classList.toggle('nav-panel--menu-open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) {
            closeMenu();
        }
    });

    const closeMenu = () => {
        header.classList.remove('nav-panel--menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
    };
}

const screenCover = document.querySelector('.screen-cover');

const updateHeader = () => {
    if (!header || !screenCover) return;
    const scrollLimit = screenCover.offsetHeight - header.offsetHeight;

    if (window.scrollY > scrollLimit) {
        header.classList.add('nav-panel--scrolled');
    } else {
        header.classList.remove('nav-panel--scrolled');
    }
};

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', updateHeader);
updateHeader();