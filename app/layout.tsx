import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Import komponen layout
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// (Konfigurasi font dan metadata tetap sama seperti sebelumnya)
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
  metadataBase: new URL("https://amrizal-rekber.com"), // TODO: Ganti dengan domain asli Anda saat deploy
  title: {
    default: "Amrizal Escrow | Layanan Rekening Bersama Terpercaya",
    template: "%s | Amrizal Escrow",
  },
  description:
    "Layanan Rekening Bersama (Escrow) profesional dan terpercaya di Indonesia. Amankan transaksi digital, jual beli akun, dan jasa freelance Anda dengan dukungan admin 24/7.",
  keywords: [
    "rekber",
    "escrow indonesia",
    "rekening bersama",
    "jual beli aman",
    "rekber game",
    "rekber terpercaya",
  ],
  authors: [{ name: "Amrizal Escrow Team" }],
  creator: "Amrizal Escrow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://amrizal-rekber.com",
    title: "Amrizal Escrow | Rekening Bersama Terpercaya",
    description:
      "Amankan transaksi digital Anda tanpa rasa khawatir. Layanan escrow netral, cepat, dan transparan.",
    siteName: "Amrizal Escrow",
    images: [
      {
        url: "/images/og-image.jpg", // TODO: Siapkan gambar 1200x630px di folder public/images/
        width: 1200,
        height: 630,
        alt: "Amrizal Escrow Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrizal Escrow | Rekening Bersama Terpercaya",
    description:
      "Layanan Rekening Bersama (Escrow) profesional dan terpercaya di Indonesia.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        {/* Global Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
