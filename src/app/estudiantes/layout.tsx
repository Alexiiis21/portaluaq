import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sidebar } from '@/components/sidebar'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal UAQ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
