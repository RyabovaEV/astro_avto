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

    const hasOld = root.dataset.scheduleHasOld === 'true';
    const isAfterCutoff = new Date() >= switchAt;

    // дата наступила или нет старого расписания — просто показываем текущее
    if (!hasOld || isAfterCutoff) {
      return;
    }

    // до даты переключения — вешаем обработчики на кнопки
    this.bindButtons(root);
  }

  private bindButtons(root: HTMLElement): void {
    const buttons = root.querySelectorAll<HTMLButtonElement>('[data-schedule-period-btn]');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const period = btn.dataset.schedulePeriodBtn;
        if (!this.isPeriod(period)) return;

        buttons.forEach((b) => b.removeAttribute('data-active'));
        btn.dataset.active = 'true';

        this.applyPeriod(root, period);
      });
    });
  }

  private applyPeriod(root: HTMLElement, period: 'current' | 'old'): void {
    const blocks = root.querySelectorAll<HTMLElement>('[data-schedule-period]');
    blocks.forEach((block) => {
      block.hidden = block.dataset.schedulePeriod !== period;
    });
  }

  private isPeriod(value: unknown): value is 'current' | 'old' {
    return value === 'current' || value === 'old';
  }
}

export default ScheduleDateGate;