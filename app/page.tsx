import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <Section>
      <Navbar/>
      <Container>
        <div className="space-y-12">
          
          {/* Bagian 1: Uji Coba Tipografi */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Sistem Desain Aktif.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Ini adalah teks paragraf menggunakan font <strong>Inter</strong>. Sedangkan judul di atas menggunakan font <strong>Plus Jakarta Sans</strong>. Jika instalasi berhasil, Anda akan melihat perbedaan karakter font yang jelas dan elegan.
            </p>
          </div>

          {/* Bagian 2: Uji Coba Palet Warna (Trust & Premium) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Uji Coba Warna (Design Tokens)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
              
              <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-sm flex items-center justify-center text-center">
                Primary
                <br />(Authoritative Slate)
              </div>
              
              <div className="bg-secondary text-secondary-foreground p-6 rounded-lg shadow-sm flex items-center justify-center text-center">
                Secondary
                <br />(Emerald Trust)
              </div>
              
              <div className="bg-muted text-muted-foreground p-6 rounded-lg border border-border flex items-center justify-center text-center">
                Muted
                <br />(Soft Background)
              </div>
              
              <div className="bg-accent text-accent-foreground p-6 rounded-lg border border-border flex items-center justify-center text-center">
                Accent
                <br />(Premium Whitespace)
              </div>

            </div>
          </div>

          {/* Bagian 3: Uji Coba Layout Wrapper */}
          <div className="p-8 border-2 border-dashed border-border rounded-lg bg-accent text-accent-foreground text-center">
            Elemen ini dibungkus dengan komponen <strong>Section</strong> (untuk padding vertikal) dan <strong>Container</strong> (untuk pembatas lebar maksimal dan letak di tengah).
          </div>

        </div>
      </Container>
    </Section>
  );
}