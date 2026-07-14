"use client";

import { useState } from "react";
import { Send, CheckCircle2, UploadCloud, Info } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function ReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman data
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
                Lengkapi data di bawah ini untuk pelaporan kasus penipuan atau
                Hackback (HB).
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
                className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <div className="space-y-8">
                  {/* Grup 1: Data Transaksi / Game */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-border pb-2">
                      1. Data Transaksi & Akun
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="gameId"
                          className="text-sm font-medium text-foreground">
                          ID Akun / Game
                        </label>
                        <input
                          id="gameId"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                          placeholder="Contoh: 12345678"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="server"
                          className="text-sm font-medium text-foreground">
                          Server
                        </label>
                        <input
                          id="server"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                          placeholder="Contoh: Asia / 1023"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="tanggalTransaksi"
                          className="text-sm font-medium text-foreground">
                          Tanggal Transaksi
                        </label>
                        <input
                          id="tanggalTransaksi"
                          type="date"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="tanggalHb"
                          className="text-sm font-medium text-foreground">
                          Tanggal Kejadian (HB)
                        </label>
                        <input
                          id="tanggalHb"
                          type="date"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grup 2: Data Pelaku */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-border pb-2">
                      2. Data Pelaku (Terlapor)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="namaPelaku"
                          className="text-sm font-medium text-foreground">
                          Nama Lengkap / Nama FB Pelaku
                        </label>
                        <input
                          id="namaPelaku"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                          placeholder="Nama akun sosial media pelaku"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="waPelaku"
                          className="text-sm font-medium text-foreground">
                          WhatsApp Pelaku
                        </label>
                        <input
                          id="waPelaku"
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                          placeholder="Contoh: 081234567890"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grup 3: Data Pelapor */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-border pb-2">
                      3. Data Pelapor (Anda)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="namaPelapor"
                          className="text-sm font-medium text-foreground">
                          Nama FB Pelapor
                        </label>
                        <input
                          id="namaPelapor"
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                          placeholder="Nama akun Facebook Anda"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="waPelapor"
                          className="text-sm font-medium text-foreground">
                          Nomor WA Pelapor
                        </label>
                        <input
                          id="waPelapor"
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm"
                          placeholder="Nomor WhatsApp aktif Anda"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grup 4: Kronologi & Bukti */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-border pb-2">
                      4. Kronologi & Bukti
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="chronology"
                          className="text-sm font-medium text-foreground">
                          Detail Kronologi
                        </label>
                        <textarea
                          id="chronology"
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth text-sm resize-none"
                          placeholder="Jelaskan secara ringkas bagaimana penipuan atau HB terjadi..."></textarea>
                      </div>

                      <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center bg-muted/30 hover:bg-muted/50 transition-smooth cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                          <UploadCloud className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </div>
                        <p className="text-sm font-medium text-foreground">
                          Klik untuk mengunggah bukti (Screenshot)
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Format: JPG, PNG (Maks 5MB)
                        </p>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-6 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-border mt-8">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>
                      Laporan ini akan ditinjau secara manual oleh Admin.
                    </span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-bold rounded-lg hover:bg-primary/90 transition-smooth disabled:opacity-70 disabled:cursor-not-allowed shadow-sm">
                    {isSubmitting ? "Mengirim Data..." : "Kirim Laporan"}
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
