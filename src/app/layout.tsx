import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Headroom from "react-headroom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noah Giboney Portfolio",
  description: "Portfolio website for Noah Giboney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headroomStyle = {
    zIndex: 1000,
  };

  return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar/>
        {children}
      </body>
    </html>
  );
}
