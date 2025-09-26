import "@/styles/globals.css";

import { AnalyticsScript } from "@/components/core/analytics/umami";
import { ThemeProvider } from "@/components/themes/provider";
import { env } from "@/env";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";

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
    <html lang='en' className={`${geist.variable}`} suppressHydrationWarning>
      {env.NODE_ENV !== "development" && <AnalyticsScript />}
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster theme='system' />
      </body>
    </html>
  );
}
