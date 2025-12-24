import type { Metadata } from "next";
import { Inter, Anton, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-athletic",
});

export const metadata: Metadata = {
  title: "108 Performance | When You Feel It, You'll Know",
  description: "Elite baseball training where science meets soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${anton.variable} ${oswald.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
