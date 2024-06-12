import { ChangeEvent } from "react";

type InputProps<T> = {
  name: string;
  placeholder: string;
  form: T;
  setForm: React.Dispatch<React.SetStateAction<T>>;
};

export const Input = <T,>({
  name,
  placeholder,
  form,
  setForm,
}: InputProps<T>) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const data = { ...form, [name]: value };
    setForm(data);
  };

  return (
    <div className="flex border justify-between items-center rounded-lg space-x-3 border-white hover:white-800 text-white p-4">
      <input
        className="flex border-0 outline-0 w-full bg-transparent"
        name={name}
        placeholder={placeholder}
        type="text"
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};
