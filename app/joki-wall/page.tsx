import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  CreditCard,
  Key,
  Shield,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Konsultasi & Pemesanan",
    description:
      "Pelanggan menghubungi Admin via WhatsApp / Facebook untuk mengecek ketersediaan slot joki dan menghitung total harga (jumlah tembok x harga level).",
  },
  {
    icon: CreditCard,
    title: "Pembayaran",
    description:
      "Pelanggan melakukan pembayaran secara penuh (atau DP sesuai kesepakatan) melalui metode yang tersedia (BRI, SeaBank, DANA, GoPay, dll).",
  },
  {
    icon: Key,
    title: "Serah Terima Akun",
    description:
      "Pelanggan memberikan data login (Supercell ID). Akun harus dalam keadaan aman (tidak ditabrak/login ganda) selama proses joki berlangsung.",
  },
  {
    icon: Shield,
    title: "Proses Farming & Upgrade",
    description:
      "Tim joki akan melakukan farming secara manual dan bersih (tanpa bot atau cheat) hingga target tembok tercapai.",
  },
  {
    icon: CheckCircle2,
    title: "Konfirmasi Selesai",
    description:
      "Admin akan memberikan laporan berupa screenshot hasil pengerjaan. Pelanggan dipersilakan mengamankan kembali akunnya.",
  },
];

export default function JokiWallPage() {
  return (
    <div className="flex flex-col w-full min-h-[80vh]">
      <Section className="pb-16 pt-8 overflow-hidden">
        <Container>
          <div className="space-y-12 md:space-y-16">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
                Joki Wall <span className="text-secondary">Clash of Clans</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Layanan farming dan upgrade Tembok (Wall) Town Hall tinggi
                secara manual, cepat, dan 100% aman oleh Mawar Store.
              </p>
            </div>

            {/* 2-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start animate-in fade-in slide-in-from-bottom-6 duration-700">
              {/* KOLOM KIRI: Timeline & CTA (Mengambil 7 dari 12 kolom di Desktop) */}
              <div className="lg:col-span-7 relative pl-8 md:pl-10 space-y-10">
                {/* Garis vertikal timeline */}
                <div className="absolute left-0 top-2 bottom-20 w-0.5 bg-border rounded-full hidden md:block"></div>

                <div className="space-y-8">
                  {STEPS.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={index}
                        className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 group">
                        {/* Ikon Node Timeline */}
                        <div className="md:absolute md:-left-[54px] flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary/10 text-secondary shadow-sm z-10 shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth">
                          <Icon className="w-5 h-5" />
                        </div>

                        {/* Konten Teks */}
                        <div className="bg-card/50 md:bg-transparent p-5 md:p-0 rounded-xl border border-border md:border-none w-full group-hover:translate-x-2 transition-transform duration-300">
                          <h3 className="text-lg md:text-xl font-bold text-primary mb-2 flex items-center gap-2">
                            <span className="md:hidden text-secondary">
                              #{index + 1}
                            </span>
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tombol CTA Pesan Joki */}
                <div className="pt-8 mt-4 border-t border-border">
                  <Link
                    href="https://wa.me/6285959599859"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1da851] text-white text-base font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-1">
                    <Phone className="w-5 h-5" />
                    Pesan Joki via WhatsApp
                  </Link>
                </div>
              </div>

              {/* KOLOM KANAN: Banner Pricelist (Mengambil 5 dari 12 kolom di Desktop) */}
              <div className="lg:col-span-5 relative w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-accent/20 lg:sticky lg:top-28 flex flex-col group">
                {/* Efek Glow di belakang gambar saat hover */}
                <div className="absolute inset-0 bg-primary/5 blur-xl group-hover:bg-primary/10 transition-smooth -z-10"></div>

                <Image
                  src="/images/pricelist.jpeg"
                  alt="Pricelist Joki Wall Mawar Store"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain scale-95 group-hover:scale-100 transition-transform duration-500 rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
