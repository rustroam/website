import "@/styles/globals.css";

import { ThemeProvider } from "@/components/themes/provider";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "rustroam",
  description: "Your QoL Rust server.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
