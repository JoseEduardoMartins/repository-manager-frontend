import http from "@/config/http";

export type User = {
  login: string;
  id: number;
  name: string;
  company: string;
  location: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
};

const getPathProps = (props: FindProps) => {
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

type FindProps = {
  selects: Array<string>;
  filters: Partial<User>;
};

export const find = async (pros: FindProps): Promise<User[]> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const path = getPathProps(pros);

    const { data } = await http.get(`/users/${path}`);
    return data;
  } catch (error) {
    throw error;
  }
};
