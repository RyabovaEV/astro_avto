import fs from "node:fs";
import path from "node:path";

export class ScheduleImportService {
  constructor({
    rootDir,
    parser,
    normalizer,
    routeImporter,
    commentImporter,
    writer,
  }) {
    this.rootDir = rootDir;
    this.parser = parser;
    this.normalizer = normalizer;
    this.routeImporter = routeImporter;
    this.commentImporter = commentImporter;
    this.writer = writer;
    this.scheduleDir = path.join(rootDir, "src", "data", "schedule");
    this.importDir = path.join(this.scheduleDir, "import");
  }

  run() {
    const warnings = [];
    const files = this.listImportFiles();

    const suburbanFile = this.pickLatest(files, (name) => name.startsWith("suburban_"));
    const cityFile = this.pickLatest(files, (name) => name.startsWith("city_"));
    const suburbanCommentsFile = this.pickLatest(files, (name) => name.startsWith("subcomments_"));
    const cityCommentsFile = this.pickLatest(files, (name) => name.startsWith("citycomments_"));

    if (!suburbanFile || !cityFile || !suburbanCommentsFile) {
      throw new Error("Не найдены обязательные TSV-файлы (suburban/city/subcomments).");
    }

    const suburbanRows = this.readRowsFromFile(suburbanFile.fullPath);
    const cityRows = this.readRowsFromFile(cityFile.fullPath);
    const suburbanCommentRows = this.readRowsFromFile(suburbanCommentsFile.fullPath);

    const suburbanRoutes = this.routeImporter.parse(suburbanRows, warnings, suburbanFile.name);
    const cityRoutes = this.routeImporter.parse(cityRows, warnings, cityFile.name);
    const suburbanComments = this.commentImporter.parse(suburbanCommentRows, warnings, suburbanCommentsFile.name);

    this.writer.writeRoutesFile(path.join(this.scheduleDir, "suburban.ts"), "suburbanRoutes", suburbanRoutes);
    this.writer.writeRoutesFile(path.join(this.scheduleDir, "city.ts"), "cityRoutes", cityRoutes);
    this.writer.writeCommentsFile(path.join(this.scheduleDir, "suburbanComments.ts"), "suburbanComments", suburbanComments);

    if (cityCommentsFile) {
      const cityCommentRows = this.readRowsFromFile(cityCommentsFile.fullPath);
      const cityComments = this.commentImporter.parse(cityCommentRows, warnings, cityCommentsFile.name);
      this.writer.writeCommentsFile(path.join(this.scheduleDir, "cityComments.ts"), "cityComments", cityComments);
    }

    const importedRoutes = suburbanRoutes.length + cityRoutes.length;
    const importedTrips = this.countTripEntries(suburbanRoutes) + this.countTripEntries(cityRoutes);
    const importedComments = suburbanComments.length;

    return {
      importedRoutes,
      importedTrips,
      importedComments,
      warnings,
      files: {
        suburban: suburbanFile.name,
        city: cityFile.name,
        suburbanComments: suburbanCommentsFile.name,
        ...(cityCommentsFile ? { cityComments: cityCommentsFile.name } : {}),
      },
    };
  }

  listImportFiles() {
    return fs.readdirSync(this.importDir)
      .filter((fileName) => fileName.toLowerCase().endsWith(".tsv"))
      .map((fileName) => ({
        name: fileName,
        fullPath: path.join(this.importDir, fileName),
        mtimeMs: fs.statSync(path.join(this.importDir, fileName)).mtimeMs,
      }));
  }

  pickLatest(files, predicate) {
    return files
      .filter((file) => predicate(file.name.toLowerCase()))
      .sort((a, b) => b.mtimeMs - a.mtimeMs)[0];
  }

  readRowsFromFile(filePath) {
    const text = fs.readFileSync(filePath, "utf8");
    return this.parser.parse(text).rows;
  }

  countTripEntries(routes) {
    return routes.reduce(
      (sum, route) => sum + (route.departure?.length ?? 0) + (route.arrival?.length ?? 0),
      0,
    );
  }
}
