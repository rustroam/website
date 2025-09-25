import { SERVER_DETAILS, STEAM_APP_ID } from "@/consts/rust";
import { Activity, ArrowUpRight, FileText, Home, Link } from "lucide-react";

export const LINKS = {
  DISCORD: "https://discord.gg/NReK7Q2NHu",
  STEAM_CONNECT: `steam://run/${STEAM_APP_ID}//+connect ${SERVER_DETAILS.host}:${SERVER_DETAILS.port}`,
} as const;

export interface NavbarNavLink {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: "left" | "right";
  active?: boolean;
}

export const NAVIGATION_LINKS: Omit<NavbarNavLink, "active">[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/status", label: "Status", icon: Activity },
  { href: "/link", label: "Link Accounts", icon: Link },
  { href: "/rules", label: "Rules", icon: FileText },
  {
    href: "/discord",
    label: "Discord",
    icon: ArrowUpRight,
    iconPosition: "right",
  },
];
