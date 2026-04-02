class HeaderStickyState {
  private static readonly SENTINEL = '[data-header-sticky-sentinel]';
  private static readonly HEADER = '[data-header]';

  constructor() {
    const sentinel = document.querySelector<HTMLElement>(HeaderStickyState.SENTINEL);
    const header = document.querySelector<HTMLElement>(HeaderStickyState.HEADER);
    if (!sentinel || !header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) header.removeAttribute('data-stuck');
        else header.setAttribute('data-stuck', '');
      },
      { root: null, threshold: 0 },
    );

    observer.observe(sentinel);
  }
}

export default HeaderStickyState;
