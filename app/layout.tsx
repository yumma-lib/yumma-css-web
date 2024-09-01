import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Yumma CSS Play",
  description: "Yumma CSS Playground based on Sandpack.",
  icons: {
    icon: "https://play.yummacss.com/favicon.ico",
    apple: "https://play.yummacss.com/apple-icon.png",
  },
  openGraph: {
    title: "Yumma CSS Play",
    description: "Yumma CSS Playground based on Sandpack.",
    siteName: "Yumma CSS Play",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.yummacss.com/og.png",
      },
    ],
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
