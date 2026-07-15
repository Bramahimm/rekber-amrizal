"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MAIN_NAV } from "@/constants/navigation";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState(() => {
    if (typeof window === "undefined") return "";
    return window.location.hash;
  });

  // Melacak hash (#) di URL saat komponen dimuat dan setiap kali URL berubah
  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Logika pengecekan menu aktif (Path URL + Hash)
  const isMenuActive = (href: string) => {
    if (href.includes("#")) {
      // Jika menu berupa anchor link (misal: /#panduan)
      return pathname === "/" && activeHash === href.replace("/", "");
    }
    if (href === "/") {
      // Jika menu adalah Beranda dan tidak ada hash yang aktif
      return pathname === "/" && (activeHash === "" || activeHash === "#");
    }
    // Jika menu adalah halaman terpisah (misal: /blacklist)
    return pathname === href;
  };

  // Fungsi khusus untuk menangani klik menu
  const handleMenuClick = (href: string) => {
    setIsMobileMenuOpen(false); // Tutup menu mobile jika sedang terbuka

    // Jika menu yang diklik memiliki hash, perbarui state secara instan untuk responsivitas UI
    if (href.includes("#")) {
      setActiveHash(href.replace("/", ""));
    } else if (href === "/") {
      setActiveHash(""); // Reset hash jika kembali ke Beranda
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {MAIN_NAV.map((item) => {
              const isActive = isMenuActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className={cn(
                    "text-sm font-medium transition-smooth hover:text-secondary",
                    isActive
                      ? "text-secondary font-semibold"
                      : "text-muted-foreground",
                  )}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://facebook.com/amrswkz"
              onClick={() => handleMenuClick("/#kontak")}
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-smooth shadow-sm">
              Gunakan Rekber
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-in slide-in-from-top-2">
          <Container>
            <nav className="flex flex-col py-4 space-y-4">
              {MAIN_NAV.map((item) => {
                const isActive = isMenuActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => handleMenuClick(item.href)}
                    className={cn(
                      "text-sm font-medium block w-full",
                      isActive
                        ? "text-secondary font-semibold"
                        : "text-foreground",
                    )}>
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="https://facebook.com/amrswkz"
                onClick={() => handleMenuClick("/#kontak")}
                className="mt-4 w-full text-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-smooth">
                Gunakan Rekber
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
