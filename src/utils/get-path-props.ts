export type FindProps<T> = {
  selects: Array<string>;
  filters: Partial<T>;
};

export const getPathProps = (props: FindProps<unknown>) => {
  const { selects, filters } = props;

  let path = "";

  let selectsPath = "";

  if (selects && selects.length) {
    const data = selects.map((value) => `select=${value}`);
    selectsPath = selectsPath.concat(`${data.join("&")}`);
  }

  if (selectsPath.length) path += selectsPath;

  let filtersPath = "";
  const strainers = Object.entries(filters);

  if (strainers && strainers.length) {
    const concatFilters = strainers.map(([key, value]) => `${key}=${value}`);
    filtersPath = filtersPath.concat(`${concatFilters.join("&")}`);
  }

  path += path.length ? `&${filtersPath}` : filtersPath;

  return `?${path}`;
};
