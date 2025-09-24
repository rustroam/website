"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function ActionButtons() {
  const handleSteamConnect = () => {
    toast.success("connecting to server...");
  };

  const handleDiscordJoin = () => {
    toast.success("opening discord...");
  };

  return (
    <div className='flex flex-col'>
      <Button asChild variant='linkHover2' size='lg'>
        <Link
          href='steam://run/252490//+connect 161.97.147.247:28015'
          onClick={handleSteamConnect}
        >
          connect to server
        </Link>
      </Button>

      <Button asChild variant='linkHover2' size='lg'>
        <Link
          href='https://discord.gg/NReK7Q2NHu'
          onClick={handleDiscordJoin}
          target='_blank'
        >
          join our discord
        </Link>
      </Button>
    </div>
  );
}
