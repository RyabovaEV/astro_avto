import { ImportReporter } from "./schedule-import/reporter.mjs";
import { CommentBlockImporter, RouteBlockImporter } from "./schedule-import/importers.mjs";
import { ScheduleImportService } from "./schedule-import/service.mjs";
import { ScheduleNormalizer } from "./schedule-import/normalizer.mjs";
import { TsvParser } from "./schedule-import/tsv-parser.mjs";
import { TsDataWriter } from "./schedule-import/writer.mjs";

function main() {
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

  const result = service.run();
  reporter.print(result);
}

main();
