import type React from "react";
import type { Metadata } from "next";
import { Quicksand, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { generateOrganizationSchema, jsonLdScriptProps } from "@/lib/json-ld";
import "./globals.css";

const _quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-headings",
});
const _dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Lenggah - Seat Authentically Yours",
    template: "%s | Lenggah",
  },
  description: "Custom furniture and interior design with authentic craftsmanship. Create your perfect seat with Lenggah.",
  keywords: [
    "custom furniture",
    "interior design",
    "handcrafted chairs",
    "Indonesian furniture",
    "bespoke seating",
    "furniture design",
    "custom chairs",
    "modern furniture",
  ],
  authors: [{ name: "Lenggah" }],
  creator: "Lenggah",
  publisher: "Lenggah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lenggah.com",
    siteName: "Lenggah",
    title: "Lenggah - Seat Authentically Yours",
    description: "Custom furniture and interior design with authentic craftsmanship. Create your perfect seat with Lenggah.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenggah - Seat Authentically Yours",
    description: "Custom furniture and interior design with authentic craftsmanship. Create your perfect seat with Lenggah.",
  },
  icons: {
    icon: "/assets/favicon.png",
  },
  metadataBase: new URL("https://lenggah.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script {...jsonLdScriptProps(organizationSchema)} />
      </head>
      <body className={`font-sans antialiased ${_dmSans.className} ${_quicksand.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
