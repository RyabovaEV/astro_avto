const header = document.getElementById('header');
const burger = document.querySelector('[data-burger]');
const overlay = document.querySelector('[data-overlay]');
const panel = document.querySelector('[data-mobile-panel]');

if (header && burger && overlay && panel) {
  function openMenu() {
    header.setAttribute('data-menu-open', '');
    burger.setAttribute('aria-label', 'Закрыть меню');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('data-burger-open', '');
    document.body.style.overflow = 'hidden';
    overlay.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    header.removeAttribute('data-menu-open');
    burger.setAttribute('aria-label', 'Открыть меню');
    burger.setAttribute('aria-expanded', 'false');
    burger.removeAttribute('data-burger-open');
    document.body.style.overflow = '';
    overlay.setAttribute('aria-hidden', 'true');
  }

  function isMenuOpen() {
    return header.hasAttribute('data-menu-open');
  }

  burger.addEventListener('click', () => {
    if (isMenuOpen()) closeMenu();
    else openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen()) closeMenu();
  });

  // Аккордеон в мобильном меню: клик по пункту с подменю
  panel.querySelectorAll('[data-has-submenu]').forEach((item) => {
    const link = item.querySelector('a');
    if (!link) return;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      item.toggleAttribute('data-accordion-open');
    });
  });

  // Закрыть меню при клике по обычной ссылке (переход)
  panel.querySelectorAll('a').forEach((a) => {
    const parent = a.closest('[data-has-submenu]');
    if (parent?.querySelector('a') === a) return;
    a.addEventListener('click', () => {
      closeMenu();
    });
  });
}
