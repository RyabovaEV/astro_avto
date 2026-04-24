import { ImportReporter } from "./schedule-import/reporter.mjs";
import { CommentBlockImporter, RouteBlockImporter } from "./schedule-import/importers.mjs";
import { ScheduleImportService } from "./schedule-import/service.mjs";
import { ScheduleNormalizer } from "./schedule-import/normalizer.mjs";
import { TsvParser } from "./schedule-import/tsv-parser.mjs";
import { TsDataWriter } from "./schedule-import/writer.mjs";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function askFileNames() {
  const rl = readline.createInterface({ input, output });
  const inputFileName = (await rl.question("Введите имя входного TSV из папки src/data/schedule/import: ")).trim();
  const outputFileName = (await rl.question("Введите имя выходного TS (будет записан в src/data/schedule): ")).trim();
  rl.close();

  if (!inputFileName) {
    throw new Error("Имя входного файла не может быть пустым.");
  }
  if (!outputFileName) {
    throw new Error("Имя выходного файла не может быть пустым.");
  }

  return { inputFileName, outputFileName };
}

async function main() {
  const { inputFileName, outputFileName } = await askFileNames();
  const parser = new TsvParser();
  const normalizer = new ScheduleNormalizer();
  const routeImporter = new RouteBlockImporter(normalizer);
  const commentImporter = new CommentBlockImporter(normalizer);
  const writer = new TsDataWriter();
  const service = new ScheduleImportService({
    rootDir: process.cwd(),
    parser,
    normalizer,
    routeImporter,
    commentImporter,
    writer,
  });
  const reporter = new ImportReporter();

  const result = service.run({ inputFileName, outputFileName });
  reporter.print(result);
}

main().catch((error) => {
  console.error(`Ошибка импорта: ${error.message}`);
  process.exitCode = 1;
});
