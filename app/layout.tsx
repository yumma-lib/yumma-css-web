import { Inter } from "next/font/google";
import { Metadata } from "next";
import icon from "../public/icon.png";
import appleIcon from "../public/apple-icon.png";

const inter = Inter({ subsets: ["latin"] });

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Yumma CSS Play",
  description: "Yumma CSS Playground based on Sandpack.",
  icons: {
    icon: `${icon}`,
    apple: `${appleIcon}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
