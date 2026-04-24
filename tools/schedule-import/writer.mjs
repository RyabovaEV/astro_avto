import fs from "node:fs";

export class TsDataWriter {
  formatValue(value, level = 0) {
    const indent = "  ".repeat(level);
    const nextIndent = "  ".repeat(level + 1);

    if (Array.isArray(value)) {
      if (!value.length) {
        return "[]";
      }
      const body = value.map((item) => `${nextIndent}${this.formatValue(item, level + 1)}`).join(",\n");
      return `[\n${body}\n${indent}]`;
    }

    if (value && typeof value === "object") {
      const body = Object.entries(value)
        .map(([key, itemValue]) => `${nextIndent}${key}: ${this.formatValue(itemValue, level + 1)}`)
        .join(",\n");
      return `{\n${body}\n${indent}}`;
    }

    return JSON.stringify(value);
  }

  writeRoutesFile(targetPath, exportName, routes) {
    const content =
      `import type { RouteSchedule } from "./schema";\n\n` +
      `export const ${exportName}: RouteSchedule[] = ${this.formatValue(routes)} as const;\n`;
    fs.writeFileSync(targetPath, content, "utf8");
  }

  writeCommentsFile(targetPath, exportName, comments) {
    const content =
      `import type { RoutesComments } from "./schema";\n\n` +
      `export const ${exportName}: RoutesComments[] = ${this.formatValue(comments)};\n`;
    fs.writeFileSync(targetPath, content, "utf8");
  }
}
