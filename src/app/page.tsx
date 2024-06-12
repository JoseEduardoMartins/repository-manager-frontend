"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useApp } from "./useApp";

export default function Home() {
  const { user, setuser, handleSubmit } = useApp();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-column gap-4" onSubmit={handleSubmit}>
        <Input
          name="login"
          placeholder="Digite login de um usuario..."
          form={user}
          setForm={setuser}
        />
        <Button>Buscar</Button>
      </form>

      <div></div>
    </main>
  );
}
