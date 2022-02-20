export const getSearchParams = (searchParams: string) =>
  searchParams
    .replace("?", "")
    .split("&")
    .reduce(function (params: { [key: string]: unknown }, next: string) {
      const [key, value] = next.split("=");

      if (key && value) {
        params[decodeURIComponent(key)] = decodeURIComponent(value);
      }

      return params;
    }, {});
