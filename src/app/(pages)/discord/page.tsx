import { LINKS } from "@/consts/links";
import { redirect } from "next/navigation";

export default function DiscordPage() {
  redirect(LINKS.DISCORD);
}
