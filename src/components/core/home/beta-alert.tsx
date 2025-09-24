import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function BetaAlert() {
  return (
    <Alert className='max-w-md'>
      <Info className='h-4 w-4' />
      <AlertTitle>Beta Stage</AlertTitle>
      <AlertDescription>
        Our server is in beta stage development and is currently whitelisted.
        <br />
        Join our Discord for updates.
      </AlertDescription>
    </Alert>
  );
}
