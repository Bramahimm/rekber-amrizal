"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

const BANNERS = [
  {
    id: 1,
    src: "/images/Banner.png",
    alt: "Profil Amrizal Rekber 1",
    fallbackColor: "bg-slate-900",
    label: "Keamanan Terjamin",
  },
  {
    id: 2,
    src: "/images/Banner2.png",
    alt: "Profil Amrizal Rekber 2",
    fallbackColor: "bg-slate-800",
    label: "Proses Transparan",
  },
  {
    id: 3,
    src: "/images/Banner4.png",
    alt: "Profil Amrizal Rekber 3",
    fallbackColor: "bg-slate-700",
    label: "Dukungan 24/7",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play effect untuk banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    }, 5000); // Ganti slide setiap 5 detik
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  return (
    <Section className="relative pt-6 md:pt-10 pb-16 overflow-hidden">
      <Container>
        {/* --- BANNER CAROUSEL SECTION --- */}
        <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-16 group shadow-xl border border-border/50">
          {BANNERS.map((banner, index) => (
            <div
              key={banner.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
                banner.fallbackColor,
              )}>
              {/* Placeholder teks jika gambar belum ada. Nanti akan tertutup oleh Image jika src valid */}
              <div className="absolute inset-0 flex items-center justify-center text-white/50 font-heading text-2xl tracking-widest z-0">
                NANTI DIISI BANNER SESUAI PERMINTAAN {banner.id}
              </div>

              {/* Uncomment dan sesuaikan src jika gambar sudah ada di folder public */}
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                priority={index === 0}
                className="object-cover z-10"
              />
            </div>
          ))}

          {/* Navigation Controls (Muncul saat hover di desktop) */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 hover:bg-background/80 text-white hover:text-foreground backdrop-blur-sm transition-smooth opacity-0 group-hover:opacity-100 hidden md:block"
            aria-label="Previous Banner">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 hover:bg-background/80 text-white hover:text-foreground backdrop-blur-sm transition-smooth opacity-0 group-hover:opacity-100 hidden md:block"
            aria-label="Next Banner">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators (Dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {BANNERS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-smooth",
                  index === currentSlide
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/80",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* --- COPYWRITING & STATS SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & CTA */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Amankan Transaksi Digital Anda Bersama{" "}
              <span className="text-secondary">Amrizal Fathurrahman.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Layanan Rekber profesional untuk jual-beli akun game, aset
              digital. Kami menahan dana Anda hingga akun diterima dengan aman.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="https://facebook.com/amrswkz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-base font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1">
                Gunakan Rekber Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#panduan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:bg-accent/80 transition-smooth border border-border">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                Cara Kerja
              </Link>
            </div>
          </div>

          {/* Right Column: Trust Visuals / Statistics */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="bg-card border border-border rounded-2xl shadow-xl shadow-slate-200/50 p-6 space-y-6 relative z-10">
              <div className="space-y-2">
                <h3 className="font-heading font-semibold text-lg">
                  Dana Dijamin Aman
                </h3>
                <p className="text-sm text-muted-foreground">
                  Transaksi pasti puas
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 p-4 bg-accent/50 rounded-lg border border-border/50">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-xs font-medium text-muted-foreground">
                    Terpercaya
                  </p>
                </div>
                <div className="space-y-1 p-4 bg-accent/50 rounded-lg border border-border/50">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-xs font-medium text-muted-foreground">
                    Transparan
                  </p>
                </div>
                <div className="space-y-1 p-4 bg-accent/50 rounded-lg border border-border/50">
                  <p className="text-3xl font-bold text-primary">{"< 5"}</p>
                  <p className="text-xs font-medium text-muted-foreground">
                    Menit Waktu Respon
                  </p>
                </div>
                <div className="space-y-1 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="text-3xl font-bold text-secondary">8+</p>
                  <p className="text-xs font-medium text-secondary/80">
                    Tahun Pengalaman
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-br from-secondary/30 to-primary/5 rounded-2xl blur-2xl -z-10 opacity-50"></div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
