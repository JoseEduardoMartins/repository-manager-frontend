import http from "@/config/http";
import { getPathProps, FindProps } from "@/utils/get-path-props";
import { Repository } from "./repository.service";

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
  repositories: Repository[] | [];
};

export const find = async (pros: FindProps<User>): Promise<User[]> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const path = getPathProps(pros);

    const { data } = await http.get(`/users/${path}`);
    return data;
  } catch (error) {
    throw error;
  }
};
