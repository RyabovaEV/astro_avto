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

  run({ inputFileName, outputFileName }) {
    const warnings = [];
    const inputPath = this.resolveInputPath(inputFileName);
    const outputPath = this.resolveOutputPath(outputFileName);
    const parsed = this.parser.parse(fs.readFileSync(inputPath, "utf8"));
    const fileType = this.detectFileType(parsed.headers);

    let importedRoutes = 0;
    let importedTrips = 0;
    let importedComments = 0;
    let exportName = "";

    if (fileType === "routes") {
      const routes = this.routeImporter.parse(parsed.rows, warnings, inputFileName);
      exportName = this.buildExportName(outputFileName, "routes");
      this.writer.writeRoutesFile(outputPath, exportName, routes);
      importedRoutes = routes.length;
      importedTrips = this.countTripEntries(routes);
    } else {
      const comments = this.commentImporter.parse(parsed.rows, warnings, inputFileName);
      exportName = this.buildExportName(outputFileName, "comments");
      this.writer.writeCommentsFile(outputPath, exportName, comments);
      importedComments = comments.length;
    }

    return {
      importedRoutes,
      importedTrips,
      importedComments,
      warnings,
      files: { input: inputFileName, output: outputFileName },
      fileType,
      exportName,
    };
  }

  resolveInputPath(inputFileName) {
    const fullPath = path.join(this.importDir, inputFileName);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Входной файл не найден: ${inputFileName}`);
    }
    return fullPath;
  }

  resolveOutputPath(outputFileName) {
    if (!outputFileName.toLowerCase().endsWith(".ts")) {
      throw new Error("Имя выходного файла должно заканчиваться на .ts");
    }
    return path.join(this.scheduleDir, outputFileName);
  }

  detectFileType(headers) {
    const headerSet = new Set(headers);
    const routeHeaders = ["route_number", "route_name", "kind", "dep_time", "arr_time"];
    const commentHeaders = ["number", "comment", "times"];

    if (routeHeaders.every((header) => headerSet.has(header))) {
      return "routes";
    }
    if (commentHeaders.every((header) => headerSet.has(header))) {
      return "comments";
    }

    throw new Error("Не удалось определить тип TSV. Ожидаются заголовки маршрутов или комментариев.");
  }

  buildExportName(outputFileName, fileType) {
    const baseName = path.basename(outputFileName, ".ts");
    const parts = baseName.split(/[^a-zA-Z0-9а-яА-Я]+/).filter(Boolean);
    const camelBase = parts
      .map((part, index) => {
        const lowered = part.toLowerCase();
        if (index === 0) {
          return lowered;
        }
        return lowered.charAt(0).toUpperCase() + lowered.slice(1);
      })
      .join("");

    if (!camelBase) {
      return fileType === "routes" ? "generatedRoutes" : "generatedComments";
    }
    return camelBase;
  }

  countTripEntries(routes) {
    return routes.reduce(
      (sum, route) => sum + (route.departure?.length ?? 0) + (route.arrival?.length ?? 0),
      0,
    );
  }
}
