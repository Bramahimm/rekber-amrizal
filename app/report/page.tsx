"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Send,
  CheckCircle2,
  UploadCloud,
  Info,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function ReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman data ke server selama 2 detik
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full min-h-[80vh]">
      <Section className="pb-12">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Header Halaman */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                Lapor Indikasi Penipuan
              </h1>
              <p className="text-muted-foreground text-lg">
                Bantu komunitas agar terhindar dari transaksi bermasalah.
                Laporkan data penipu beserta bukti kronologi yang valid.
              </p>
            </div>

            {/* Peringatan Awal */}
            <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
              <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-sm text-black leading-relaxed">
                <strong>Perhatian:</strong> Laporan palsu atau pencemaran nama
                baik tanpa bukti yang sah dapat berakibat pada pemblokiran akses
                Anda secara permanen terhadap layanan kami.
              </p>
            </div>

            {/* Kondisi Sukses vs Form */}
            {isSuccess ? (
              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mb-6 shadow-lg shadow-secondary/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-3">
                  Laporan Berhasil Diterima
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Terima kasih atas partisipasi Anda. Tim operasional kami akan
                  segera meninjau bukti yang Anda lampirkan sebelum memasukkan
                  data tersebut ke dalam daftar hitam publik.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 bg-background border border-border text-foreground text-sm font-medium rounded-lg hover:bg-muted transition-smooth">
                  Kirim Laporan Baru
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-8">
                <div className="space-y-6">
                  {/* Grup 1: Identitas Terlapor */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-border pb-2">
                      1. Data Terlapor
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="targetName"
                          className="text-sm font-medium text-foreground">
                          Nama Pemilik Rekening / Akun
                        </label>
                        <input
                          id="targetName"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                          placeholder="Contoh: Budi Santoso"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="targetNumber"
                          className="text-sm font-medium text-foreground">
                          Nomor Rekening / Telepon
                        </label>
                        <input
                          id="targetNumber"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                          placeholder="Contoh: 1234567890"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label
                          htmlFor="platform"
                          className="text-sm font-medium text-foreground">
                          Platform / Bank
                        </label>
                        <input
                          id="platform"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                          placeholder="Contoh: Bank BCA, DANA, OVO, Facebook"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grup 2: Kronologi Kejadian */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-border pb-2">
                      2. Detail Kejadian
                    </h3>
                    <div className="space-y-2">
                      <label
                        htmlFor="chronology"
                        className="text-sm font-medium text-foreground">
                        Jelaskan Kronologi (Maks. 500 karakter)
                      </label>
                      <textarea
                        id="chronology"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm resize-none"
                        placeholder="Jelaskan secara objektif urutan kejadian, kesepakatan awal, dan tindakan yang mengarah pada kerugian Anda..."></textarea>
                    </div>
                  </div>

                  {/* Grup 3: Bukti (Mock File Upload) */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-border pb-2">
                      3. Lampiran Bukti
                    </h3>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center bg-muted/30 hover:bg-muted/50 transition-smooth cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                        <UploadCloud className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        Klik untuk mengunggah tangkapan layar (Screenshot)
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Format yang didukung: JPG, PNG, PDF (Maks 5MB)
                      </p>
                      {/* Note: Input file secara semantik ada, tapi sengaja disembunyikan untuk desain */}
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*,.pdf"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Info className="w-4 h-4" />
                    <span>Data Anda dilindungi enkripsi SSL.</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-bold rounded-lg hover:bg-primary/90 transition-smooth disabled:opacity-70 disabled:cursor-not-allowed shadow-sm">
                    {isSubmitting ? "Mengirim Laporan..." : "Kirim Laporan"}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}
