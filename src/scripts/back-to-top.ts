class BackToTop {
  static SELECTORS = {
    root: '[data-back-to-top]',
    footer: '[data-footer]',
  };

  private readonly root: HTMLElement | null;
  private threshold = 1000;
  private raf = 0;

  constructor() {
    this.root = document.querySelector<HTMLElement>(BackToTop.SELECTORS.root);
    if (!this.root) return;

    this.threshold = Number(this.root.dataset.threshold ?? '1000') || 1000;
    this.bindEvents();
    this.scheduleUpdate();
  }

  private setVisible(visible: boolean) {
    this.root?.toggleAttribute('data-visible', visible);
  }

  /** Не даём кнопке заезжать на футер: поднимаем bottom, когда футер в зоне видимости. */
  private updateFooterOffset() {
    if (!this.root) return;

    const footer = document.querySelector<HTMLElement>(BackToTop.SELECTORS.footer);
    if (!footer) {
      this.root.style.removeProperty('bottom');
      return;
    }

    const rootStyle = getComputedStyle(document.documentElement);
    const baseBottom =
      parseFloat(rootStyle.getPropertyValue('--space-2')) || 16;
    const gapAboveFooter =
      parseFloat(rootStyle.getPropertyValue('--space-1')) || 8;

    const footerTop = footer.getBoundingClientRect().top;
    const vh = window.innerHeight;
    const overlap = vh - footerTop;

    if (overlap <= 0) {
      this.root.style.removeProperty('bottom');
      return;
    }

    const bottomPx = Math.max(baseBottom, overlap + gapAboveFooter);
    this.root.style.bottom = `${bottomPx}px`;
  }

  private update() {
    this.setVisible(window.scrollY > this.threshold);
    this.updateFooterOffset();
  }

  private scheduleUpdate = () => {
    if (this.raf) return;
    this.raf = window.requestAnimationFrame(() => {
      this.raf = 0;
      this.update();
    });
  };

  private onClick = (e: Event) => {
    const target = e.target as HTMLElement | null;
    const btn = target?.closest('button');
    if (!btn) return;

    e.preventDefault();

    const prefersReduced =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  private bindEvents() {
    this.root?.addEventListener('click', this.onClick);
    window.addEventListener('scroll', this.scheduleUpdate, { passive: true });
    window.addEventListener('resize', this.scheduleUpdate, { passive: true });
  }
}

export default BackToTop;

