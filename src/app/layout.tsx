import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yumma CSS Play',
  description: 'Yumma CSS playground based on Monaco editor.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yumma-lib/yumma-css@release/dist/yumma.css"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
