import http from "@/config/http";
import { Repository } from "./repository.service";

export type User = {
  login: string;
  id: number;
  name: string;
  repositories: Repository[] | [];
};

export const findByLogin = async (login: string): Promise<User> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await http.get(`/users/${login}`);
    return data;
  } catch (error) {
    throw error;
  }
};
