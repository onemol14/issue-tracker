import { Button } from "@/components/ui/button";
import { CardWithForm } from "../components/CardWithForm";
import { ModeToggle } from "../components/ui/toggle-mode";


export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center ">

      <CardWithForm></CardWithForm>

      <ModeToggle />
    </main>
  );
}
