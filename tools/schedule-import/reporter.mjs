export class ImportReporter {
  print(result) {
    console.log(
      `Импорт завершен: маршрутов ${result.importedRoutes}, записей времени ${result.importedTrips}, комментариев ${result.importedComments}.`,
    );
    console.log(
      `Файлы: suburban=${result.files.suburban}, city=${result.files.city}, subcomments=${result.files.suburbanComments}`,
    );

    if (result.warnings.length) {
      console.log(`Предупреждений: ${result.warnings.length}`);
      result.warnings.forEach((warning) => console.log(`- ${warning}`));
      return;
    }

    console.log("Предупреждений нет.");
  }
}
