import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </main>
  );
}
