const header = document.getElementById('header');
const burger = document.querySelector('[data-burger]');
const overlay = document.querySelector('[data-overlay]');
const panel = document.querySelector('[data-mobile-panel]');

if (header && burger && overlay && panel) {
  const h = header;
  const b = burger;
  const o = overlay;
  const p = panel;

  function openMenu() {
    h.setAttribute('data-menu-open', '');
    b.setAttribute('aria-label', 'Закрыть меню');
    b.setAttribute('aria-expanded', 'true');
    b.setAttribute('data-burger-open', '');
    document.body.style.overflow = 'hidden';
    o.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    h.removeAttribute('data-menu-open');
    b.setAttribute('aria-label', 'Открыть меню');
    b.setAttribute('aria-expanded', 'false');
    b.removeAttribute('data-burger-open');
    document.body.style.overflow = '';
    o.setAttribute('aria-hidden', 'true');
  }

  function isMenuOpen() {
    return h.hasAttribute('data-menu-open');
  }

  b.addEventListener('click', () => {
    if (isMenuOpen()) closeMenu();
    else openMenu();
  });

  o.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen()) closeMenu();
  });

  // Аккордеон в мобильном меню: клик по пункту с подменю
  p.querySelectorAll('[data-has-submenu]').forEach((item) => {
    const link = item.querySelector('a');
    if (!link) return;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      item.toggleAttribute('data-accordion-open');
    });
  });

  // Закрыть меню при клике по обычной ссылке (переход)
  p.querySelectorAll('a').forEach((a) => {
    const parent = a.closest('[data-has-submenu]');
    if (parent?.querySelector('a') === a) return;
    a.addEventListener('click', () => {
      closeMenu();
    });
  });
}
