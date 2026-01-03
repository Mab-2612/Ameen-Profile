import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter", // This matches the variable in globals.css
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Fullstack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased min-h-screen", inter.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}