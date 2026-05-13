import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import SideNav from "@/components/SideNav";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif-display",
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
      <body className={`${dmSerifDisplay.variable} bg-background text-body font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="flex min-h-screen">
            <SideNav />
            <main className="flex-1 max-w-[1200px]">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
