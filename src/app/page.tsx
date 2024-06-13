"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Table } from "@/components/table";
import { useApp } from "./useApp";

export default function Home() {
  const { user, setuser, handleSubmit } = useApp();

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <form className="flex flex-column gap-4" onSubmit={handleSubmit}>
        <Input
          name="login"
          placeholder="Digite login de um usuario..."
          form={user}
          setForm={setuser}
        />
        <Button>Buscar</Button>
      </form>

      {user?.repositories && user.repositories.length ? (
        <Table
          columns={[
            {
              label: "Id",
              key: "id",
            },
            {
              label: "Nome",
              key: "name",
            },
            {
              label: "Linguagem",
              key: "language",
            },
            {
              label: "Opções",
              key: "options",
            },
          ]}
          rows={user?.repositories}
        />
      ) : (
        <h2>Usuario sem repositorios</h2>
      )}
    </main>
  );
}
