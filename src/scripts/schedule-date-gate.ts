class ScheduleDateGate {
  private static readonly TARGET_PATHS = ['/schedule/city', '/schedule/suburban'] as const;

  constructor() {
    if (!this.isTargetPage()) return;

    const periodRoot = document.querySelector<HTMLElement>('[data-schedule-period-root]');
    if (!periodRoot) return;

    this.initPeriodGate(periodRoot);
  }

  private isTargetPage(): boolean {
    const { pathname } = window.location;
    return ScheduleDateGate.TARGET_PATHS.some((path) => pathname.startsWith(path));
  }

  private initPeriodGate(root: HTMLElement): void {
    const switchAtRaw = root.dataset.scheduleSwitchAt;
    const hasOld = root.dataset.scheduleHasOld === 'true';

    if (!hasOld) {
      this.showPeriod(root, 'current');
      this.hideControl(root);
      return;
    }

    if (!switchAtRaw) {
      this.showPeriod(root, 'current');
      this.hideControl(root);
      return;
    }

    const switchAt = new Date(switchAtRaw);
    if (Number.isNaN(switchAt.getTime())) {
      this.showPeriod(root, 'current');
      this.hideControl(root);
      return;
    }

    const isAfterCutoff = new Date() >= switchAt;

    if (isAfterCutoff) {
      this.showPeriod(root, 'current');
      this.hideControl(root);
    } else {
      this.showPeriod(root, 'old');
      this.setActiveButton(root, 'old');
      this.bindButtons(root);
    }

    // Снимаем флаг "до инициализации" — убирает мигание переключателя
    root.setAttribute('data-schedule-ready', '');
  }

  // ---------- отображение ----------

  private showPeriod(root: HTMLElement, period: Period): void {
    // переключаем блоки расписания
    root.querySelectorAll<HTMLElement>('[data-schedule-period]').forEach((block) => {
      block.hidden = block.dataset.schedulePeriod !== period;
    });

    // переключаем сообщения — исправлен camelCase: schedulePeriodMessage
    root.querySelectorAll<HTMLElement>('[data-schedule-period-message]').forEach((msg) => {
      msg.hidden = msg.dataset.schedulePeriodMessage !== period;
    });
  }

  private hideControl(root: HTMLElement): void {
    const control = root.querySelector<HTMLElement>('[data-schedule-period-control]');
    if (control) control.hidden = true;
  }

  private setActiveButton(root: HTMLElement, period: Period): void {
    root.querySelectorAll<HTMLButtonElement>('[data-schedule-period-btn]').forEach((btn) => {
      if (btn.dataset.schedulePeriodBtn === period) {
        btn.dataset.active = 'true';
      } else {
        delete btn.dataset.active;
      }
    });
  }

  // ---------- переключатель ----------

  private bindButtons(root: HTMLElement): void {
    root.querySelectorAll<HTMLButtonElement>('[data-schedule-period-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const period = btn.dataset.schedulePeriodBtn;
        if (!this.isPeriod(period)) return;

        this.showPeriod(root, period);
        this.setActiveButton(root, period);
      });
    });
  }

  private isPeriod(value: unknown): value is Period {
    return value === 'current' || value === 'old';
  }
}

type Period = 'current' | 'old';

export default ScheduleDateGate;