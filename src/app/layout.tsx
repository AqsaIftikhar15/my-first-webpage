import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <header className="header">
          <nav>
      <Link href="/">Home Page</Link>
      <Link href="/profile">Profile Page</Link>
      <Link href="/contactus">Contact us</Link>
      </nav>
      </header>
      
        {children}

        <footer className="footer">
          <nav>
        Created by Aqsa Iftikhar
        </nav>
      </footer>
      </body>
      
    </html>
  );
}
