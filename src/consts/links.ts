import { SERVER_DETAILS, STEAM_APP_ID } from "@/consts/rust";

export const LINKS = {
  DISCORD: "https://discord.gg/NReK7Q2NHu",
  STEAM_CONNECT: `steam://run/${STEAM_APP_ID}//+connect ${SERVER_DETAILS.host}:${SERVER_DETAILS.port}`,
} as const;

export interface NavbarNavLink {
  href: string;
  label: string;
  active?: boolean;
}

export const NAVIGATION_LINKS: Omit<NavbarNavLink, "active">[] = [
  { href: "/", label: "Home" },
  { href: "/status", label: "Status" },
  { href: "/discord", label: "Discord" },
];
