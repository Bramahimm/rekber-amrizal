"use client";

import { useState } from "react";
import {
  Search,
  ShieldCheck,
  ShieldAlert,
  AlertCircle,
  Loader2,
  Info,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";

type SearchStatus = "idle" | "loading" | "safe" | "danger";

export default function BlacklistPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<SearchStatus>("idle");
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setStatus("loading");
    setSearchedTerm(query);

    // Simulasi penundaan jaringan (Mock API Request) selama 1.5 detik
    setTimeout(() => {
      // Logika Mock Data:
      // Jika input mengandung "123" atau "penipu", sistem akan mengembalikan status bahaya.
      // Selain itu, kembalikan status aman.
      const isBlacklisted =
        query.includes("123") || query.toLowerCase().includes("penipu");
      setStatus(isBlacklisted ? "danger" : "safe");
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full min-h-[80vh]">
      <Section className="pb-8">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Header Halaman */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                Pengecekan Rekening & Identitas
              </h1>
              <p className="text-muted-foreground text-lg">
                Masukkan nomor rekening, nomor telepon, atau nama pengguna untuk
                memeriksa riwayat transaksi bermasalah di dalam basis data kami.
              </p>
            </div>

            {/* Form Pencarian */}
            <form
              onSubmit={handleSearch}
              className="relative flex items-center w-full shadow-sm rounded-xl overflow-hidden border border-border focus-within:ring-2 focus-within:ring-secondary/50 transition-smooth">
              <div className="absolute left-4 text-muted-foreground">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Contoh: 1234567890 atau Budi Santoso"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full py-4 pl-12 pr-32 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={status === "loading" || !query.trim()}
                className="absolute right-2 px-6 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed">
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  "Periksa"
                )}
              </button>
            </form>

            {/* Area Hasil Pencarian */}
            <div className="pt-8">
              {/* State: Idle (Belum melakukan pencarian) */}
              {status === "idle" && (
                <div className="bg-muted/50 border border-border rounded-xl p-6 text-center flex flex-col items-center gap-3">
                  <p className="text-muted-foreground text-sm">
                    Gunakan formulir di atas untuk memulai pencarian. Data yang
                    ditampilkan berasal dari rekam jejak pelaporan pengguna.
                  </p>
                </div>
              )}

              {/* State: Safe (Aman) */}
              {status === "safe" && (
                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2">
                  <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-secondary-foreground flex items-center gap-2">
                      Tidak Ditemukan Laporan Negatif
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Data{" "}
                      <strong className="text-foreground">
                        {searchedTerm}
                      </strong>{" "}
                      tidak tercatat dalam daftar hitam kami saat ini. Namun,
                      kami menyarankan Anda untuk tetap menggunakan layanan
                      Rekber untuk menghindari risiko penipuan di masa
                      depan.
                    </p>
                  </div>
                </div>
              )}

              {/* State: Danger (Berbahaya) */}
              {status === "danger" && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2">
                  <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-red-600 dark:text-red-400">
                      Peringatan: Data Tercatat di Daftar Hitam!
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Data{" "}
                      <strong className="text-foreground">
                        {searchedTerm}
                      </strong>{" "}
                      memiliki riwayat pelaporan terkait indikasi penipuan atau
                      pelanggaran transaksi. Harap segera hentikan komunikasi
                      atau transaksi dengan pihak ini.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="mt-8 flex items-start gap-3 p-4 bg-accent rounded-lg border border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Catatan:</strong> Hasil pencarian ini
                berdasarkan laporan yang masuk ke sistem Amrizal Rekber. Status
                <strong> Aman</strong> bukan merupakan garansi mutlak, melainkan indikasi bahwa
                belum ada laporan negatif yang diverifikasi terhadap data
                tersebut.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
