import type { Metadata } from "next";
import { Inter, Pacifico, Italiana, Satisfy } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap'
});
const pacifico = Pacifico({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-pacifico",
  display: 'swap'
});
const italiana = Italiana({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-italiana",
  display: 'swap'
});
const satisfy = Satisfy({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-satisfy",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Dreamscape Events",
  description: "Turning Dreams into Reality, One Event at a Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body 
        className={`${inter.variable} ${pacifico.variable} ${italiana.variable} ${satisfy.variable} font-inter antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}