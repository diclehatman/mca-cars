/* =========================================
   HAMBURGER MENU — Aç/Kapat
   ========================================= */
function toggleMenu() {
    const menu   = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
    if (!menu || !toggle) return;

    const isOpen = menu.classList.toggle('show');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);

    /* Menü açıkken sayfa kaydırmayı kısıtla (opsiyonel) */
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

/* Menü linkine tıklayınca menüyü kapat */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            const menu   = document.querySelector('.menu');
            const toggle = document.querySelector('.menu-toggle');
            if (menu)   menu.classList.remove('show');
            if (toggle) { toggle.classList.remove('active'); toggle.setAttribute('aria-expanded', false); }
            document.body.style.overflow = '';
        });
    });
});

/* Menü dışına tıklayınca kapat */
document.addEventListener('click', (e) => {
    const menu   = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
    if (!menu || !toggle) return;
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
    }
});

/* =========================================
   HEADER SCROLL — Glassmorphism efekti
   ========================================= */
window.addEventListener('scroll', () => {
    const header = document.querySelector('.menu-container');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
});
