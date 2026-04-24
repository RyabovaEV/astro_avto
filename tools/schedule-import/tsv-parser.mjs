export class TsvParser {
  parse(text) {
    const rows = text
      .replace(/\uFEFF/g, "")
      .split(/\r?\n/)
      .filter((line) => line.trim().length > 0)
      .map((line) => line.split("\t"));

    if (!rows.length) {
      return { headers: [], rows: [] };
    }

    const headers = rows[0].map((header) => header.trim());
    const dataRows = rows.slice(1).map((cells) => {
      const row = {};
      headers.forEach((header, index) => {
        row[header] = cells[index] ?? "";
      });
      return row;
    });

    return { headers, rows: dataRows };
  }
}
