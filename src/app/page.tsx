import { ActionButtons } from "@/components/core/home/action-buttons";
import { BetaAlert } from "@/components/core/home/beta-alert";
import { Hero } from "@/components/core/home/hero";
import { ServerStatus } from "@/components/core/home/server-status";
import { ModeToggle } from "@/components/themes/toggle";

export default function HomePage() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center'>
      <div className='absolute top-4 right-4 z-10'>
        <ModeToggle />
      </div>
      <div className='container flex flex-col items-center justify-center gap-8 px-4 py-16'>
        <BetaAlert />
        <Hero />
        <ActionButtons />
        <ServerStatus />
      </div>
    </main>
  );
}
