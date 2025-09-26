import { ActionButtons } from "@/components/core/home/action-buttons";
import { Hero } from "@/components/core/home/hero";
import { ServerStatus } from "@/components/core/home/server-status";
import { ModeToggle } from "@/components/themes/toggle";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function HomePage() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden'>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className='[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
      />
      <div className='absolute top-4 right-4 z-10'>
        <ModeToggle />
      </div>
      <div className='container relative z-10 flex flex-col items-center justify-center gap-8 px-4 py-16'>
        <Hero />
        <ActionButtons />
        <ServerStatus />
      </div>
    </main>
  );
}
