class BackToTop {
  static SELECTORS = {
    root: '[data-back-to-top]',
  };

  private readonly root: HTMLElement | null;
  private threshold = 1000;
  private raf = 0;

  constructor() {
    this.root = document.querySelector<HTMLElement>(BackToTop.SELECTORS.root);
    if (!this.root) return;

    this.threshold = Number(this.root.dataset.threshold ?? '1000') || 1000;
    this.bindEvents();
    this.onScroll();
  }

  private setVisible(visible: boolean) {
    this.root?.toggleAttribute('data-visible', visible);
  }

  private onScroll = () => {
    if (this.raf) return;
    this.raf = window.requestAnimationFrame(() => {
      this.raf = 0;
      this.setVisible(window.scrollY > this.threshold);
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
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }
}

export default BackToTop;

