import http from "@/config/http";

export type Repository = {
  id: number;
  name: string;
  language: string;
};

export const remove = async (id: number): Promise<void> => {
  // eslint-disable-next-line no-useless-catch
  try {
    await http.delete(`/repositories/${id}`);
  } catch (error) {
    throw error;
  }
};
