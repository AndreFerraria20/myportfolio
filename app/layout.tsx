import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const miloner = localFont({
  src: [
    {
      path: "./fonts/Miloner.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/MilonerBold.woff2",
      weight: "700",
      style: "normal"
    }
  ], variable: "--font-miloner",
});


export const metadata: Metadata = {
  title: "André Ferraria",
  description: "André Ferraria's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${miloner.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
