import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjana Tharindu — Software Developer",
  description: "Software developer crafting elegant digital experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
