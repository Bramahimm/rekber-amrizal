import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amrizal Fathurrahman | Rekber Terpercaya",
  description: "Layanan Rekening Bersama profesional dan terpercaya. Amankan transaksi digital Anda dengan proses yang transparan dan dukungan 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}