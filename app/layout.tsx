import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import "./styles/globals.css";

export const metadata = {
  title: "Yumma CSS Play",
  description: "Yumma CSS Playground based on Sandpack.",
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
