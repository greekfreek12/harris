import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import ClientProviders from "@/components/ClientProviders";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Harris Plumbing & Home Improvements | Birmingham, Alabama",
  description:
    "Premium home improvements and plumbing services in Birmingham, Alabama. Bathroom remodels, kitchen upgrades, repairs, and more. Call 205-829-5282.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSerif.variable} antialiased`}
      >
        <ClientProviders>
          <Navbar />
          <main>{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}
