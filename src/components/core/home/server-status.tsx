import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServerStatus() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Button
        asChild
        variant='link'
        className='h-auto p-0 text-muted-foreground text-sm'
      >
        <Link href='/status'>server status (coming soon)</Link>
      </Button>
    </div>
  );
}
