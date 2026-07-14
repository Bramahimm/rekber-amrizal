import Link from "next/link";
import { MAIN_NAV } from "@/constants/navigation";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40 mt-auto">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Layanan Rekening Bersama profesional dan terpercaya di
              Kalangan Facebook.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-primary">
              Tautan Cepat
            </h4>
            <ul className="space-y-2">
              {MAIN_NAV.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan & Support */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-primary">Bantuan</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/report"
                  className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                  Lapor Akun
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/amrswkz" target="_blank"
                  className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                  Hubungi Amrizal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Amrizal Rekber. All rights reserved.
          </p> 
        </div>
      </Container>
    </footer>
  );
}
