import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { SparksBackground } from "@/components/common/SparksBackground";
import {Footer} from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

// (Bagian export const metadata tidak perlu diubah, biarkan seperti sebelumnya)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} relative antialiased flex flex-col min-h-screen`}>
        {/* Komponen Animasi Partikel di latar belakang absolut */}
        <SparksBackground />
        
        {/* Navbar dan Konten ditempatkan di atas partikel (z-index lebih tinggi) */}
        <div className="relative z-10 flex flex-col w-full min-h-screen">
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}