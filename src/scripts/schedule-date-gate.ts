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

    document.documentElement.dataset.scheduleDateGate = isAfterCutoff ? 'after-cutoff' : 'before-cutoff';

    if (!hasNext) {
      this.applyPeriod(root, 'old');
      this.updatePeriodNotes(root, false);
      if (control) {
        control.hidden = true;
      }
      return;
    }

    let activePeriod: 'old' | 'new' = 'old';

    if (isAfterCutoff) {
      activePeriod = 'new';

      if (control) {
        control.hidden = true;
      }
      this.disableOldOption(select);
    } else {
      if (select) {
        select.value = activePeriod;
        select.addEventListener('change', () => {
          const selectedPeriod = this.isPeriod(select.value) ? select.value : 'old';
          this.applyPeriod(root, selectedPeriod);
        });
      }
    }

    if (select) {
      select.value = activePeriod;
    }

    this.updatePeriodNotes(root, isAfterCutoff);
    this.applyPeriod(root, activePeriod);
  }

  private updatePeriodNotes(root: HTMLElement, isAfterCutoff: boolean): void {
    const beforeNote = root.querySelector<HTMLElement>('[data-schedule-period-note="before"]');
    const afterNote = root.querySelector<HTMLElement>('[data-schedule-period-note="after"]');

    if (beforeNote) {
      beforeNote.hidden = isAfterCutoff;
    }

    if (afterNote) {
      afterNote.hidden = !isAfterCutoff;
    }
  }

  private disableOldOption(select: HTMLSelectElement | null): void {
    if (!select) {
      return;
    }

    const oldOption = select.querySelector<HTMLOptionElement>('option[value="old"]');
    if (oldOption) {
      oldOption.disabled = true;
    }
    select.value = 'new';
    select.disabled = true;
  }

  private applyPeriod(root: HTMLElement, period: 'old' | 'new'): void {
    const blocks = root.querySelectorAll<HTMLElement>('[data-schedule-period]');

    blocks.forEach((block) => {
      const blockPeriod = block.dataset.schedulePeriod;
      block.hidden = blockPeriod !== period;
    });
  }

  private isPeriod(value: unknown): value is 'old' | 'new' {
    return value === 'old' || value === 'new';
  }
}

export default ScheduleDateGate;
