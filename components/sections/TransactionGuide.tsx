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
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: Handshake,
    title: "Kesepakatan Bersama",
    description:
      "Pembeli dan penjual sepakat untuk menggunakan layanan Amrizal Escrow untuk mengamankan transaksi.",
  },
  {
    icon: MessageSquarePlus,
    title: "Pembuatan Grup Transaksi",
    description:
      "Admin akan membuatkan grup percakapan khusus (WhatsApp/Facebook) untuk menjaga transparansi komunikasi ketiga pihak.",
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
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Cara Menggunakan <span className="text-secondary">Rekber</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Proses transaksi didesain berlapis untuk memastikan tidak ada
              pihak yang dirugikan. Ikuti 6 langkah mudah berikut.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative max-w-4xl mx-auto">
            {/* Garis vertikal di tengah untuk Desktop, di kiri untuk Mobile */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 md:translate-x-0 hidden sm:block"></div>

            <div className="space-y-8 md:space-y-12">
              {STEPS.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
                    {/* Bagian Kiri (Teks untuk Even, Kosong untuk Odd) */}
                    <div
                      className={cn(
                        "md:w-1/2 flex flex-col",
                        isEven
                          ? "md:items-end md:pr-12 md:text-right"
                          : "md:hidden",
                      )}>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                        {step.description}
                      </p>
                    </div>

                    {/* Ikon Tengah (Node Timeline) */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-secondary text-secondary-foreground shadow-sm z-10 shrink-0 hidden sm:flex">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Card Tampilan Mobile (Atau digunakan juga sebagai fallback desain jika layout mengecil) */}
                    <div className="sm:hidden flex items-start gap-4 bg-accent/50 p-5 rounded-xl border border-border w-full">
                      <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-1">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Bagian Kanan (Teks untuk Odd, Kosong untuk Even) */}
                    <div
                      className={cn(
                        "md:w-1/2 flex flex-col",
                        !isEven
                          ? "md:items-start md:pl-12 md:text-left hidden md:flex"
                          : "hidden",
                      )}>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
