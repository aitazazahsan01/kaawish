import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer"; // <-- 1. Import the Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaawish - Vision Meets Execution",
  description: "Kaawish non-profit organisation. Promote the Art ,music ,culture. Women / youth Empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer /> {/* <-- 2. Add the Footer here */}
      </body>
    </html>
  );
}