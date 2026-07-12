import { AlertCircle, CheckCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const TRANSACTION_RULES = [
  "Biaya jasa (fee rekber) ditanggung oleh pembeli, kecuali ada kesepakatan berbeda antara pembeli dan penjual sebelumnya.",
  "Maksimal waktu pengecekan barang/akun oleh pembeli adalah 1x24 jam setelah data dikirimkan.",
  "Jika terjadi pembatalan transaksi dari pihak pembeli tanpa alasan yang terbukti melanggar kesepakatan, biaya jasa rekber hangus.",
  "Kami berhak menolak mengawal transaksi jika terindikasi melibatkan barang ilegal, hasil peretasan, atau pencucian uang.",
  "Segala bentuk percakapan wajib dilakukan di dalam grup yang telah dibuat oleh Admin untuk dokumentasi bukti yang valid.",
];

export function Rules() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="max-w-4xl mx-auto bg-muted/30 border border-border rounded-2xl p-6 md:p-10">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-6">
            <AlertCircle className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold text-primary">
                Syarat & Ketentuan Dasar
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Harap baca parameter aturan berikut sebelum menggunakan layanan
                kami.
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            {TRANSACTION_RULES.map((rule, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {rule}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
