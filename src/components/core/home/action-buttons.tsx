"use client";

import { Button } from "@/components/ui/button";
import { LINKS } from "@/consts/links";
import Link from "next/link";
import { toast } from "sonner";

export function ActionButtons() {
  const handleToast = (message: string) => {
    toast.info(message);
  };

  return (
    <div className='grid w-full max-w-md grid-cols-2 gap-4'>
      <Button asChild variant='linkHover2' size='lg'>
        <Link
          href={LINKS.STEAM_CONNECT}
          onClick={() => handleToast("connecting to server")}
        >
          connect to server
        </Link>
      </Button>

      <Button asChild variant='linkHover2' size='lg'>
        <Link href='/rules' onClick={() => handleToast("redirecting to rules")}>
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
  );
}
