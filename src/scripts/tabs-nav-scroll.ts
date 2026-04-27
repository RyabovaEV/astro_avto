class TabsNavScroll {
  private static readonly NAV = '[data-tabs-nav]';
  private static readonly ACTIVE = '[data-active="true"]';

  constructor() {
    const nav = document.querySelector<HTMLElement>(TabsNavScroll.NAV);
    if (!nav) return;

    const activeTab = nav.querySelector<HTMLElement>(TabsNavScroll.ACTIVE);
    if (!activeTab) return;

    activeTab.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
}

export default TabsNavScroll;