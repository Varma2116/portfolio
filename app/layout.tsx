import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-vara-prasad.vercel.app/"),
  title: "Jaladanki Venkata Vara Prasad Freelancer Portfolio",
  description: "Jaladanki Venkata Vara Prasad Freelancer Portfolio",
  keywords: [
    "Developer", 
    "Portfolio", 
    "Developer Portfolio", 
    "JVVPRASAD", 
    "Jaladanki Venkata Vara Prasad"
  ],
  openGraph: {
    title: "Jaladanki Venkata Vara Prasad",
    description: "Software Engineer 2",
    images: "https://portfolio-vara-prasad.vercel.app/jvvprasad.jpeg",
    url: "https://portfolio-vara-prasad.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaladanki Venkata Vara Prasad",
    description: "Software Engineer 2",
    images: "https://portfolio-vara-prasad.vercel.app/jvvprasad.jpeg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://portfolio-vara-prasad.vercel.app/" />
        <meta name="google-site-verification" content="zwbuklX9468d6bylchGKWofPRkkQweNZWrOCH5wfxPg" />
      </head>
      <body className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
