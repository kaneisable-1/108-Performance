import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "108 Performance | The Search for Truth",
  description: "Elite baseball training where science meets soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
