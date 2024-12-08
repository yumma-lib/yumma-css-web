import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Yumma Playground",
  description: "Yumma Playground based on Sandpack.",
  icons: {
    icon: "https://play.yummacss.com/favicon.ico",
    apple: "https://play.yummacss.com/apple-icon.png",
  },
  openGraph: {
    title: "Yumma Playground",
    description: "Yumma Playground based on Sandpack.",
    siteName: "Yumma Playground",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://play.yummacss.com/og.png",
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
