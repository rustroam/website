import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServerStatus() {
  return (
    <Button asChild variant='outline' className='text-muted-foreground text-sm'>
      <Link href='/status'>server status (coming soon)</Link>
    </Button>
  );
}
