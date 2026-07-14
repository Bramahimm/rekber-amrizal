import {
  ShieldCheck,
  Clock,
  Lock,
  Scale,
  Headset,
  History,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const FEATURES = [
  {
    icon: Lock,
    title: "Dana Ditahan Terpusat",
    description:
      "Uang pembeli diamankan dalam rekening khusus dan baru akan diteruskan ke penjual setelah barang dipastikan sesuai kesepakatan.",
  },
  {
    icon: Scale,
    title: "Pihak Ketiga Netral",
    description:
      "Amrizal bertindak murni sebagai penengah yang tidak memihak, memastikan baik pembeli maupun penjual mendapatkan haknya secara adil.",
  },
  {
    icon: Clock,
    title: "Proses Terstruktur",
    description:
      "Alur transaksi memiliki prosedur standar yang jelas, meminimalisir kebingungan dan memastikan penyelesaian tepat waktu.",
  },
  {
    icon: ShieldCheck,
    title: "Verifikasi Keamanan",
    description:
      "Setiap akun dan identitas melewati tahap pencocokan data dasar sebelum transaksi dapat dilanjutkan ke tahap pembayaran.",
  },
  {
    icon: Headset,
    title: "Terpantau 24/7",
    description:
      "Amrizal memantau jalannya transaksi dan siap memberikan instruksi pemecahan kendala kapan pun dibutuhkan.",
  },
  {
    icon: History,
    title: "Pencatatan Transparan",
    description:
      "Seluruh riwayat percakapan dan bukti transfer didokumentasikan sebagai jaminan jika terjadi sengketa di kemudian hari.",
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-muted/50 ">
      <Container>
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary pt-8">
              Standar Keamanan Transaksi
            </h2>
            <p className="text-muted-foreground text-lg">
              Kami menerapkan protokol ketat untuk memastikan tidak ada celah
              bagi tindakan penipuan dalam setiap transaksi digital Anda.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-smooth group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth text-secondary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
