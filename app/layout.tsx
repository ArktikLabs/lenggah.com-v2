import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-headings",
});
const _dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lenggah - Seat Authentically Yours",
  description: "Custom furniture and interior design with authentic craftsmanship. Create your perfect seat with Lenggah.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_dmSans.className} ${_quicksand.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
