import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function ServerStatus() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <p className='text-muted-foreground text-sm'>
        server status
        <br />
        (coming soon)
      </p>
      <Alert className='max-w-md'>
        <Info className='h-4 w-4' />
        <AlertTitle>Early Access</AlertTitle>
        <AlertDescription>
          Our server is in early stage development and is currently whitelisted.
          Join our Discord for whitelist applications and updates.
        </AlertDescription>
      </Alert>
    </div>
  );
}
