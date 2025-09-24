import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="font-extrabold text-5xl tracking-tight sm:text-[5rem]">
          Rustroam
        </h1>

        <div className="flex flex-col items-center justify-center gap-4">
          <Button>Click me</Button>
        </div>
      </div>
    </main>
  );
}
