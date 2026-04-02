class HeaderMobileMenu {
  static SELECTORS = {
    header: '[data-header]',
    burger: '[data-burger]',
    overlay: '[data-overlay]',
    panel: '[data-mobile-panel]',
    hasSubmenu: '[data-has-submenu]',
    links: 'a',
  };

  private readonly header: HTMLElement | null;
  private readonly burger: HTMLElement | null;
  private readonly overlay: HTMLElement | null;
  private readonly panel: HTMLElement | null;

  constructor() {
    this.header = document.querySelector<HTMLElement>(HeaderMobileMenu.SELECTORS.header);
    this.burger = document.querySelector<HTMLElement>(HeaderMobileMenu.SELECTORS.burger);
    this.overlay = document.querySelector<HTMLElement>(HeaderMobileMenu.SELECTORS.overlay);
    this.panel = document.querySelector<HTMLElement>(HeaderMobileMenu.SELECTORS.panel);

    if (!this.header || !this.burger || !this.overlay || !this.panel) return;

    this.bindEvents();
  }

  private openMenu() {
    if (!this.header || !this.burger || !this.overlay) return;

    this.header.setAttribute('data-menu-open', '');
    this.burger.setAttribute('aria-label', 'Закрыть меню');
    this.burger.setAttribute('aria-expanded', 'true');
    this.burger.setAttribute('data-burger-open', '');
    document.body.style.overflow = 'hidden';
    this.overlay.setAttribute('aria-hidden', 'false');
  }

  private closeMenu = () => {
    if (!this.header || !this.burger || !this.overlay) return;

    this.header.removeAttribute('data-menu-open');
    this.burger.setAttribute('aria-label', 'Открыть меню');
    this.burger.setAttribute('aria-expanded', 'false');
    this.burger.removeAttribute('data-burger-open');
    document.body.style.overflow = '';
    this.overlay.setAttribute('aria-hidden', 'true');
  };

  private isMenuOpen() {
    return this.header?.hasAttribute('data-menu-open') ?? false;
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.isMenuOpen()) {
      this.closeMenu();
    }
  };

  private bindEvents() {
    this.burger?.addEventListener('click', () => {
      if (this.isMenuOpen()) this.closeMenu();
      else this.openMenu();
    });

    this.overlay?.addEventListener('click', this.closeMenu);
    document.addEventListener('keydown', this.onKeyDown);

    this.panel?.querySelectorAll(HeaderMobileMenu.SELECTORS.hasSubmenu).forEach((item) => {
      const link = item.querySelector('a');
      if (!link) return;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        item.toggleAttribute('data-accordion-open');
      });
    });

    this.panel?.querySelectorAll(HeaderMobileMenu.SELECTORS.links).forEach((a) => {
      const parent = a.closest(HeaderMobileMenu.SELECTORS.hasSubmenu);
      if (parent?.querySelector('a') === a) return;
      a.addEventListener('click', this.closeMenu);
    });
  }
}

export default HeaderMobileMenu;
