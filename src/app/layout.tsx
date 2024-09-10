import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mobeen Fabrics | Home",
    template: "%s | Mobeen Fabrics",
  },
  description: "we are wholesaler and manufacturer of best banarasi sarees",
  keywords: ["banarasi", "sarees", "wholesaler", "manufacturer"],
  verification: {
    google: "449828c573cf2dbf",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
