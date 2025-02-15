import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} relative font-body antialiased`}
      >
        <Navbar />
        <main className="relative container space-y-24 mt-10">{children}</main>
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | Prabhakar Kimavath",
    default: "Prabhakar Kimavath",
  },
  description:
    "Hi i'm Prabhakar, i'm a Java Developer. Building scalable App's & providing Quality Solutions",
  authors: [{ name: "Prabhakar" }],
  metadataBase: new URL("https://prabhakar.com"),
  openGraph: {
    title: "Prabhakar Kimavath",
    description:
      "Hi i'm Prabhakar, i'm a Java Developer. Building scalable App's & providing Quality Solutions",
    url: "https://prabhakar.com",
    siteName: "Prabhakar Kimavath",
    images: [
      {
        url: `/og-image.webp`,
        height: 630,
        width: 1200,
        alt: `og image`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/profile.webp",
    shortcut: "/profile.webp",
    apple: "/profile.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "light",
};
