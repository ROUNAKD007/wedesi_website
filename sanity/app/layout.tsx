import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "WeDesi @ UIC — South Asian Student Community",
  description: "Events, culture, and connection for South Asian students at UIC.",
  icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
      </body>
    </html>
  );
}
