import Link from "next/link";
import { MessageCircle, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FaFacebook } from "react-icons/fa";

export function ContactCTA() {
  return (
    <Section id="kontak" className="bg-primary text-primary-foreground">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Siap Mengamankan Transaksi Anda?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Hubungi Amrizal sekarang. Proses pembuatan grup transaksi
              memakan waktu kurang dari 5 menit pada jam operasional.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://facebook.com/amrswkz" // TODO: Ganti dengan link Facebook valid
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground text-sm font-bold rounded-lg hover:bg-primary-foreground/20 transition-smooth border border-primary-foreground/20">
              <FaFacebook size={24} />
              Hubungi via Facebook
            </Link>
          </div>

          {/* Business Hours Info */}
          <div className="pt-8 border-t border-primary-foreground/10 flex items-center justify-center gap-2 text-sm text-primary-foreground/70 pb-16">
            <Clock className="w-4 h-4" />
            <span>
              Jam Kerja: <strong>07:00 - 00:30 WIB</strong> (Libur di Waktu Sibuk)
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
