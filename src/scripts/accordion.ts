class Accordion {
  static SELECTORS = {
    root: '[data-accordion]',
    item: '[data-accordion-item]',
    trigger: '[data-accordion-trigger]',
    panel: '[data-accordion-panel]',
    header: '[data-header]',
  };

  constructor() {
    document.querySelectorAll<HTMLElement>(Accordion.SELECTORS.root).forEach((root) => {
      this.bindRoot(root);
    });
  }

  private scrollPanelIntoView(panel: HTMLElement) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const header = document.querySelector<HTMLElement>(Accordion.SELECTORS.header);
    const headerOffset = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
    const targetTop = window.scrollY + panel.getBoundingClientRect().top - headerOffset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }

  private setItemOpen(item: HTMLElement, open: boolean) {
    const trigger = item.querySelector<HTMLElement>(Accordion.SELECTORS.trigger);
    const panel = item.querySelector<HTMLElement>(Accordion.SELECTORS.panel);
    if (!trigger || !panel) return;

    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) panel.removeAttribute('hidden');
    else panel.setAttribute('hidden', '');
  }

  private enforceSingleOpen(items: HTMLElement[]) {
    const openItems = items.filter(
      (item) =>
        item.querySelector<HTMLElement>(Accordion.SELECTORS.trigger)?.getAttribute('aria-expanded') ===
        'true',
    );
    if (openItems.length <= 1) return;
    openItems.slice(1).forEach((item) => this.setItemOpen(item, false));
  }

  private bindRoot(root: HTMLElement) {
    if (root.hasAttribute('data-accordion-initialized')) return;
    root.setAttribute('data-accordion-initialized', '');

    const items = [...root.querySelectorAll<HTMLElement>(Accordion.SELECTORS.item)];
    this.enforceSingleOpen(items);

    items.forEach((item) => {
      const trigger = item.querySelector<HTMLElement>(Accordion.SELECTORS.trigger);
      if (!trigger) return;

      trigger.addEventListener('click', () => {
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          this.setItemOpen(item, false);
          return;
        }
        items.forEach((other) => this.setItemOpen(other, other === item));
        const panel = item.querySelector<HTMLElement>(Accordion.SELECTORS.panel);
        if (panel) {
          requestAnimationFrame(() => {
            this.scrollPanelIntoView(panel);
          });
        }
      });
    });
  }
}

export default Accordion;