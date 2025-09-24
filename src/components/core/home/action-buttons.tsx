"use client";

import { Button } from "@/components/ui/button";
import { LINKS } from "@/consts/links";
import Link from "next/link";
import { toast } from "sonner";

export function ActionButtons() {
  const handleSteamConnect = () => {
    toast.success("connecting to server...");
  };

  const handleDiscordJoin = () => {
    toast.success("opening discord...");
  };

  return (
    <div className='flex flex-col'>
      <Button asChild variant='linkHover2' size='lg'>
        <Link href={LINKS.STEAM_CONNECT} onClick={handleSteamConnect}>
          connect to server
        </Link>
      </Button>

      <Button asChild variant='linkHover2' size='lg'>
        <Link href='/discord' onClick={handleDiscordJoin}>
          join our discord
        </Link>
      </Button>
    </div>
  );
}
