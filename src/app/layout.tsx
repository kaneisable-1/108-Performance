import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "108 Performance",
  description: "Feel-based training. We don't teach a system. We help you find yours.",
  keywords: ["baseball training", "softball training", "108 Performance", "Knoxville", "player development"],
  metadataBase: new URL("https://108-apple-landing.vercel.app"),
  openGraph: {
    title: "108 Performance",
    description: "Feel-based training. We don't teach a system. We help you find yours.",
    url: "https://108-apple-landing.vercel.app",
    siteName: "108 Performance",
    type: "website",
    images: [
      {
        url: "https://108-apple-landing.vercel.app/og-108-logo.png",
        width: 1200,
        height: 630,
        alt: "108 Performance Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "108 Performance",
    description: "Feel-based training. We don't teach a system. We help you find yours.",
    images: ["https://108-apple-landing.vercel.app/og-108-logo.png"],
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
