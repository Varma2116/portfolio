import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-vara-prasad.vercel.app/"
  ),
  title: "Jaladanki Venkata Vara Prasad Freelancer Portfolio",
  description: "Jaladanki Venkata Vara Prasad Freelancer Portfolio",
  content : "Jaladanki Venkata Vara Prasad Freelancer Portfolio",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "JVVPRASAD", "JALADANKI VENKATA VARA PRASAD"],
  openGraph: {
    title: "JALADANKI VENKATA VARA PRASAD",
    description: "Software Engineer 2",
    images: "/jvvprasad.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
