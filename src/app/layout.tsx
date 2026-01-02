import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shreeji Water Treatment | Electronic Water Softeners",
  description:
    "Electronic Water Softeners (Descalers) for domestic, commercial and industrial use. No salt, no chemicals, maintenance-free.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<body className="min-h-screen text-slate-900 antialiased">
  {/* Global soft gradient background */}
  <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(1000px_circle_at_80%_20%,rgba(34,211,238,0.18),transparent_55%),linear-gradient(to_bottom,#ffffff,rgba(248,250,252,1))]">
    <Navbar />
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      {children}
    </main>
    <Footer />
  </div>
</body>
    </html>
  );
}
