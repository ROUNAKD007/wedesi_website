import "./globals.css";
import type { Metadata } from "next";
import Spotlight from "@/components/announce/Spotlight";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = { title: "WeDesi @ UIC" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Spotlight />
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
      </body>
    </html>
  );
}
