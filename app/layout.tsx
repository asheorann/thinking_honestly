import type { Metadata } from "next";
import { DM_Serif_Display, Hind } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/Nav";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif-display",
});

const hind = Hind({
  weight: ["400", "600"],
  subsets: ["latin", "devanagari"],
  variable: "--font-hind",
});

export const metadata: Metadata = {
  title: "Thinking Honestly",
  description: "A smart person's notebook made public",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSerifDisplay.variable} ${hind.variable} bg-background text-body`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
