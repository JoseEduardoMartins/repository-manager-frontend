import { Repository, User, find } from "@/services/user.service";
import { FormEvent, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export const useApp = () => {
  const [user, setuser] = useState<User>();

  const createRepositoriesTable = (repository: Repository) => ({
    ...repository,
    options: (
      <div className="flex flex-row justify-center gap-6">
        <FaTrashAlt
          title="Deletar"
          className="cursor-pointer text-red-600"
          onClick={() => {}}
        />
      </div>
    ),
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const props = {
      selects: ["login", "id", "name", "repositories"],
      filters: {
        login: user?.login,
      },
    };

    const [response] = await find(props);
    const { repositories, ...rest } = response;

    const repositoryList = repositories.map((repository) =>
      createRepositoriesTable(repository)
    );

    setuser({ repositories: repositoryList, ...rest });
  };

  return { user, setuser, handleSubmit };
};
