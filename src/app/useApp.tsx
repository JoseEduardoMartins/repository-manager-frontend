import { FormEvent, useState } from "react";
import { User, find } from "@/services/user.service";

type Repository = {
  name: string;
  description: string;
};

export const useApp = () => {
  const [user, setuser] = useState<User>();

  const [repositories, setRepositories] = useState<Repository>();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const props = {
      selects: ["login", "id", "name"],
      filters: {
        login: user?.login,
      },
    };

    const [response] = await find(props);
    setuser(response);
  };

  return { user, setuser, repositories, setRepositories, handleSubmit };
};
