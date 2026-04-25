class ScheduleDateGate {
  private static readonly TARGET_PATHS = ['/schedule/city', '/schedule/suburban'] as const;

  constructor() {
    if (!this.isTargetPage()) {
      return;
    }

    const periodRoot = document.querySelector<HTMLElement>('[data-schedule-period-root]');
    if (!periodRoot) {
      return;
    }

    this.initPeriodGate(periodRoot);
  }

  private isTargetPage(): boolean {
    const { pathname } = window.location;
    return ScheduleDateGate.TARGET_PATHS.some((path) => pathname.startsWith(path));
  }

  private initPeriodGate(root: HTMLElement): void {
    const switchAtRaw = root.dataset.scheduleSwitchAt;
    if (!switchAtRaw) {
      return;
    }

    const switchAt = new Date(switchAtRaw);
    if (Number.isNaN(switchAt.getTime())) {
      return;
    }

    const hasNext = root.dataset.scheduleHasNext === 'true';
    const now = new Date();
    const isAfterCutoff = now >= switchAt;
    const control = root.querySelector<HTMLElement>('[data-schedule-period-control]');
    const select = root.querySelector<HTMLSelectElement>('[data-schedule-period-select]');

    if (!hasNext) {
      this.applyPeriod(root, 'old');
      if (control) {
        control.hidden = true;
      }
      return;
    }

    if (isAfterCutoff) {
      this.applyPeriod(root, 'new');
      if (control) {
        control.hidden = true;
      }
      return;
    }

    if (select) {
      select.value = 'old';
      select.addEventListener('change', () => {
        const selectedPeriod = this.isPeriod(select.value) ? select.value : 'old';
        this.applyPeriod(root, selectedPeriod);
      });
    }

    this.applyPeriod(root, 'old');
  }

  private applyPeriod(root: HTMLElement, period: 'old' | 'new'): void {
    const blocks = root.querySelectorAll<HTMLElement>('[data-schedule-period]');
    blocks.forEach((block) => {
      block.hidden = block.dataset.schedulePeriod !== period;
    });
  }

  private isPeriod(value: unknown): value is 'old' | 'new' {
    return value === 'old' || value === 'new';
  }
}

export default ScheduleDateGate;