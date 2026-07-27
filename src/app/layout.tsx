import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://murtamadpratama.my.id"),
  title: "Murtamad Pratama | Full-Stack TypeScript & OutSystems Developer",
  description:
    "Software Engineer based in Indonesia with enterprise OutSystems experience and hands-on full-stack development using TypeScript, Next.js, React, Node.js, NestJS, PostgreSQL, Prisma, and Supabase.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Murtamad Pratama",
    title: "Murtamad Pratama | Full-Stack TypeScript & OutSystems Developer",
    description:
      "Software Engineer with enterprise application experience and hands-on full-stack development using TypeScript, Next.js, Node.js, PostgreSQL, Prisma, and Supabase.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Murtamad Pratama - Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murtamad Pratama | Full-Stack TypeScript & OutSystems Developer",
    description:
      "Software Engineer with enterprise application experience and hands-on full-stack TypeScript and Node.js development.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Murtamad Pratama",
  jobTitle: "Software Engineer | Full-Stack TypeScript & Node.js Developer",
  url: "https://murtamadpratama.my.id",
  sameAs: [
    "https://github.com/murtamad07/",
    "https://www.linkedin.com/in/murtamadpratama/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medan",
    addressCountry: "Indonesia",
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
