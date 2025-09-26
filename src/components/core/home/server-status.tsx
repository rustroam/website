import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServerStatus() {
  return (
    <Button
      asChild
      variant="linkHover2"
      className="text-muted-foreground text-sm"
    >
      <Link href="/status">server status (coming soon)</Link>
    </Button>
  );
}
