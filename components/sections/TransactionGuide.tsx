import Image from "next/image";
import {
  Handshake,
  MessageSquarePlus,
  ShieldAlert,
  Send,
  CheckCircle2,
  Wallet,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const STEPS = [
  {
    icon: Handshake,
    title: "Kesepakatan Bersama",
    description:
      "Pembeli dan penjual sepakat untuk menggunakan layanan Amrizal untuk mengamankan transaksi.",
  },
  {
    icon: MessageSquarePlus,
    title: "Pembuatan Grup Transaksi",
    description:
      "Admin akan membuatkan grup percakapan khusus Facebook untuk menjaga transparansi komunikasi ketiga pihak.",
  },
  {
    icon: ShieldAlert,
    title: "Pengamanan Dana",
    description:
      "Pembeli mentransfer total dana (termasuk biaya layanan) ke rekening resmi kami. Dana akan kami tahan dengan aman.",
  },
  {
    icon: Send,
    title: "Penyerahan Aset",
    description:
      "Setelah dana dikonfirmasi masuk, penjual dipersilakan mengirimkan akun, barang, atau jasa langsung kepada pembeli.",
  },
  {
    icon: CheckCircle2,
    title: "Verifikasi & Konfirmasi",
    description:
      "Pembeli memeriksa aset yang diterima. Jika sudah sesuai kesepakatan, pembeli memberikan konfirmasi 'DONE' di grup.",
  },
  {
    icon: Wallet,
    title: "Pencairan Dana",
    description:
      "Admin segera meneruskan dana ke rekening penjual tanpa potongan tersembunyi. Transaksi dinyatakan selesai.",
  },
];

export function TransactionGuide() {
  return (
    <Section id="panduan" className="bg-background overflow-hidden">
      <Container>
        <div className="space-y-12 md:space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary pt-8">
              Cara Menggunakan <span className="text-secondary">Rekber Amrizal</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Proses transaksi didesain berlapis untuk memastikan tidak ada
              pihak yang dirugikan. Ikuti 6 langkah mudah berikut.
            </p>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* KOLOM KIRI: Timeline (Mengambil 7 dari 12 kolom di Desktop) */}
            <div className="lg:col-span-7 relative pl-8 md:pl-10">
              {/* Garis vertikal timeline */}
              <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-border rounded-full"></div>

              <div className="space-y-10">
                {STEPS.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={index}
                      className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 group">
                      {/* Ikon Node Timeline */}
                      <div className="absolute -left-[42px] md:-left-[54px] flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-background bg-secondary/10 text-secondary shadow-sm z-10 shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth">
                        <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>

                      {/* Konten Teks */}
                      <div className="bg-accent/30 md:bg-transparent p-5 md:p-0 rounded-xl border border-border md:border-none w-full group-hover:translate-x-2 transition-transform duration-300">
                        <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
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
            </div>

            {/* KOLOM KANAN: Banner Image (Mengambil 5 dari 12 kolom di Desktop) */}
            <div className="lg:col-span-5 relative w-full rounded-2xl overflow-hidden shadow-xl border border-border bg-muted/50 lg:sticky lg:top-28 flex flex-col">
              <Image
                src="/images/feebanner.png"
                alt="Informasi Fee Amrizal Escrow"
                width={800}
                height={1200}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-muted-foreground text-sm font-medium">
                <span>[ Area Banner Fee ]</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
