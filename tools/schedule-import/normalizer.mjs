import { DAY_ALIASES, VALID_DAYS } from "./constants.mjs";

export class ScheduleNormalizer {
  normalizeText(value) {
    return String(value ?? "")
      .replace(/\r/g, " ")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  normalizeKind(value) {
    const normalized = this.normalizeText(value).toLowerCase();
    if (normalized === "true" || normalized === "1") {
      return "circular";
    }
    if (normalized === "false" || normalized === "0" || normalized === "") {
      return "linear";
    }
    return "linear";
  }

  normalizeTime(value) {
    const normalized = this.normalizeText(value);
    if (!normalized) {
      return "";
    }

    const match = normalized.match(/^(\d{1,2})[:.](\d{2})$/);
    if (!match) {
      return "";
    }

    const hours = String(Number(match[1])).padStart(2, "0");
    return `${hours}:${match[2]}`;
  }

  normalizeDays(value, warnings, rowLabel) {
    const raw = this.normalizeText(value).replaceAll(",", ";");
    if (!raw) {
      return [];
    }

    const parts = raw
      .split(";")
      .map((part) => this.normalizeText(part).toLowerCase())
      .filter(Boolean);

    const normalizedDays = [];
    for (const part of parts) {
      const candidate = DAY_ALIASES.get(part) ?? part;
      if (VALID_DAYS.has(candidate)) {
        normalizedDays.push(candidate);
      } else {
        warnings.push(`${rowLabel}: неизвестный день "${part}"`);
      }
    }

    return [...new Set(normalizedDays)];
  }

  createTimeEntry(time, days, note, warnings, rowLabel) {
    const normalizedTime = this.normalizeTime(time);
    if (!normalizedTime) {
      if (this.normalizeText(time)) {
        warnings.push(`${rowLabel}: невалидное время "${this.normalizeText(time)}"`);
      }
      return null;
    }

    const entry = { time: normalizedTime };
    if (days.length) {
      entry.days = days;
    }

    const normalizedNote = this.normalizeText(note);
    if (normalizedNote) {
      entry.note = normalizedNote;
    }

    return entry;
  }
}
