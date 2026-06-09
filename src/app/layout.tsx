import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Murtamad Pratama | Software Engineer",
  description:
    "Portfolio Murtamad Pratama, software engineer focused on enterprise applications, OutSystems, and AI-assisted full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
