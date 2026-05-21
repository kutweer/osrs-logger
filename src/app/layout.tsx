import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ClogLog — OSRS Collection Log Tracker",
    template: "%s | ClogLog",
  },
  description:
    "Track your Old School RuneScape collection log progress, set goals, and compare with friends. The modern OSRS collection log tracker.",
  keywords: [
    "OSRS",
    "Old School RuneScape",
    "collection log",
    "tracker",
    "ironman",
    "goals",
  ],
  authors: [{ name: "ClogLog" }],
  creator: "ClogLog",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: "ClogLog — OSRS Collection Log Tracker",
    description:
      "Track your Old School RuneScape collection log progress, set goals, and compare with friends.",
    siteName: "ClogLog",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClogLog — OSRS Collection Log Tracker",
    description: "Track your OSRS collection log progress and goals.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a120b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "hsl(24 15% 11%)",
              border: "1px solid hsl(28 28% 22%)",
              color: "hsl(38 40% 88%)",
            },
          }}
        />
      </body>
    </html>
  );
}
