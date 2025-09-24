import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16'>
        <h1 className='font-extrabold text-5xl tracking-tight sm:text-[5rem]'>
          Rustroam
        </h1>

        <Button asChild variant='shine' size='lg'>
          <Link href='steam://run/252490//+connect 161.97.147.247:28015'>
            Launch Rust
          </Link>
        </Button>
      </div>
    </main>
  );
}
