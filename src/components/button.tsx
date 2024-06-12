import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => (
  <button className="border rounded-lg p-4" type="submit">
    {children}
  </button>
);
