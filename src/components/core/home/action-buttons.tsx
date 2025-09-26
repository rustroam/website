"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/consts/links";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function ActionButtons() {
  const [betaDialogOpen, setBetaDialogOpen] = useState(false);
  const router = useRouter();

  const handleToast = (message: string) => {
    toast.info(message);
  };

  const handleConnectContinue = () => {
    setBetaDialogOpen(false);
    handleToast("connecting to server");
    router.push(LINKS.STEAM_CONNECT);
  };

  return (
    <>
      <div className='grid w-full max-w-md grid-cols-2 gap-4'>
        <Button asChild variant='linkHover2' size='lg'>
          <Link
            href={LINKS.STEAM_CONNECT}
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation initially
              setBetaDialogOpen(true);
            }}
          >
            connect to server
          </Link>
        </Button>

        <Button asChild variant='linkHover2' size='lg'>
          <Link
            href='/rules'
            onClick={() => handleToast("redirecting to rules")}
          >
            read the rules
          </Link>
        </Button>

        <Button asChild variant='linkHover2' size='lg'>
          <Link
            href='/link'
            onClick={() => handleToast("redirecting to account linking")}
          >
            link accounts
          </Link>
        </Button>

        <Button asChild variant='linkHover2' size='lg'>
          <Link href='/discord' onClick={() => handleToast("opening discord")}>
            join our discord
          </Link>
        </Button>
      </div>

      <AlertDialog open={betaDialogOpen} onOpenChange={setBetaDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Beta Stage</AlertDialogTitle>
            <AlertDialogDescription>
              Our server is in beta stage development and is currently
              whitelisted.
              <br />
              Join our Discord for updates.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setBetaDialogOpen(false)}>
              Cancel
            </AlertDialogAction>
            <AlertDialogAction onClick={handleConnectContinue}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
