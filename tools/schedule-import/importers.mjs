export class RouteBlockImporter {
  constructor(normalizer) {
    this.normalizer = normalizer;
  }

  parse(rows, warnings, sourceLabel) {
    const routes = [];
    let currentRoute = null;

    rows.forEach((row, index) => {
      const line = index + 2;
      const routeNumber = this.normalizer.normalizeText(row.route_number);
      const routeName = this.normalizer.normalizeText(row.route_name);
      const kindRaw = row.kind;

      const depTimeRaw = row.dep_time ?? "";
      const depDaysRaw = row.dep_days ?? "";
      const depNoteRaw = row.dep_note ?? "";
      const arrTimeRaw = row.arr_time ?? "";
      const arrDaysRaw = row.arr_days ?? "";
      const arrNoteRaw = row.arr_note ?? "";

      const isRouteHeader = routeNumber || routeName || this.normalizer.normalizeText(kindRaw);
      if (isRouteHeader) {
        if (!routeNumber || !routeName) {
          warnings.push(`${sourceLabel}:${line}: неполная шапка маршрута`);
        }

        currentRoute = {
          number: routeNumber,
          name: routeName,
          kind: this.normalizer.normalizeKind(kindRaw),
          departure: [],
          arrival: [],
        };
        routes.push(currentRoute);
        return;
      }

      if (!currentRoute) {
        warnings.push(`${sourceLabel}:${line}: строка рейса без шапки маршрута`);
        return;
      }

      const rowLabel = `${sourceLabel}:${line} (${currentRoute.number})`;
      const depDays = this.normalizer.normalizeDays(depDaysRaw, warnings, rowLabel);
      const arrDays = this.normalizer.normalizeDays(arrDaysRaw, warnings, rowLabel);

      const depEntry = this.normalizer.createTimeEntry(depTimeRaw, depDays, depNoteRaw, warnings, rowLabel);
      const arrEntry = this.normalizer.createTimeEntry(arrTimeRaw, arrDays, arrNoteRaw, warnings, rowLabel);

      if (!depEntry && !arrEntry) {
        return;
      }

      if (depEntry) {
        currentRoute.departure.push(depEntry);
      }
      if (arrEntry) {
        currentRoute.arrival.push(arrEntry);
      }
    });

    return routes.map((route) => {
      const normalizedRoute = {
        number: route.number,
        name: route.name,
        kind: route.kind,
      };

      if (route.departure.length) {
        normalizedRoute.departure = route.departure;
      }
      if (route.arrival.length) {
        normalizedRoute.arrival = route.arrival;
      }
      return normalizedRoute;
    });
  }
}

export class CommentBlockImporter {
  constructor(normalizer) {
    this.normalizer = normalizer;
  }

  parse(rows, warnings, sourceLabel) {
    const commentsMap = new Map();
    let currentKey = "";

    rows.forEach((row, index) => {
      const line = index + 2;
      const number = this.normalizer.normalizeText(row.number);
      const comment = this.normalizer.normalizeText(row.comment);
      const time = this.normalizer.normalizeTime(row.times ?? "");
      const rowLabel = `${sourceLabel}:${line}`;

      if (number || comment) {
        if (!number || !comment) {
          warnings.push(`${rowLabel}: неполный блок комментария`);
        }

        currentKey = number;
        if (!commentsMap.has(currentKey)) {
          commentsMap.set(currentKey, {
            number: currentKey,
            comment,
            times: [],
          });
        } else {
          const existing = commentsMap.get(currentKey);
          if (comment && existing.comment && comment !== existing.comment) {
            warnings.push(`${rowLabel}: конфликт комментария для маршрута "${currentKey}"`);
          }
          if (comment && !existing.comment) {
            existing.comment = comment;
          }
        }
      }

      if (!currentKey) {
        if (time) {
          warnings.push(`${rowLabel}: время без блока комментария`);
        }
        return;
      }

      if (this.normalizer.normalizeText(row.times) && !time) {
        warnings.push(`${rowLabel}: невалидное время комментария "${this.normalizer.normalizeText(row.times)}"`);
      }

      if (time) {
        commentsMap.get(currentKey).times.push(time);
      }
    });

    return [...commentsMap.values()].map((item) => ({
      number: item.number,
      ...(item.times.length ? { times: [...new Set(item.times)] } : {}),
      comment: item.comment,
    }));
  }
}
