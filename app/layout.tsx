import "./globals.css";
import type { Metadata } from "next";
import Spotlight from "@/components/announce/Spotlight";
import SiteHeader from "@/components/site-header";
import AnimatedBackdrop from "@/components/visuals/AnimatedBackdrop";
import SparkleCursor from "@/components/visuals/SparkleCursor";

export const metadata: Metadata = { title: "WeDesi @ UIC" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <AnimatedBackdrop />
        <SparkleCursor />
        <Spotlight />
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
      </body>
    </html>
  );
}
