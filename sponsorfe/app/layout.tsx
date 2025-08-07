import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sponsor",
  description: "Prototype App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased dark`}
        >
          <header>
        <nav className="flex justify-around items-center p-3">
          <h1><a href="/">Sponsor</a></h1>
          <div className="gap-2 flex">
          <Button variant="outline"><a href="/about">About Us</a></Button>
          <Button variant="outline"><a href="/login">Login</a></Button>
          <Button variant="outline"><a href="/signup">Sign Up</a></Button>
          </div>
        </nav>
            </header>
        {children}
      <footer className="text-center"><Button variant="link"><a href="/contact">Contact Us</a></Button></footer>
      </body>
    </html>
  );
}
