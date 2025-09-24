export const LINKS = {
  DISCORD: "https://discord.gg/NReK7Q2NHu",
  STEAM_CONNECT: "steam://run/252490//+connect 161.97.147.247:28015",
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
