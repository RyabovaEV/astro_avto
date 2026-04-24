export class ImportReporter {
  print(result) {
    if (result.fileType === "routes") {
      console.log(
        `Импорт завершен: маршрутов ${result.importedRoutes}, записей времени ${result.importedTrips}.`,
      );
    } else {
      console.log(`Импорт завершен: комментариев ${result.importedComments}.`);
    }
    console.log(`Файлы: input=${result.files.input}, output=${result.files.output}, export=${result.exportName}`);

    if (result.warnings.length) {
      console.log(`Предупреждений: ${result.warnings.length}`);
      result.warnings.forEach((warning) => console.log(`- ${warning}`));
      return;
    }

    console.log("Предупреждений нет.");
  }
}
