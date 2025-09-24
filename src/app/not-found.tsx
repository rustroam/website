import { ModeToggle } from "@/components/themes/toggle";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFoundPage() {
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
        <h1 className='font-extrabold text-5xl tracking-tight sm:text-[5rem]'>
          404
        </h1>

        <Alert className='max-w-md'>
          <AlertTriangle className='h-4 w-4' />
          <AlertTitle>Page Not Found</AlertTitle>
          <AlertDescription>
            The page you're looking for doesn't exist or has been moved.
          </AlertDescription>
        </Alert>

        <Button asChild className='mt-4'>
          <a href='/'>
            <Home className='mr-2 h-4 w-4' />
            Go Home
          </a>
        </Button>
      </div>
    </main>
  );
}
