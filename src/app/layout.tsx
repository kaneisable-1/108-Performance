import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "108 Performance | The Door Is Open",
  description: "People come for the work. They stay for something else. Elite baseball and softball training in Knoxville, TN.",
  keywords: ["baseball training", "softball training", "108 Performance", "Knoxville", "player development"],
  openGraph: {
    title: "108 Performance",
    description: "People come for the work. They stay for something else.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
