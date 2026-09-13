import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { BenefitsBar } from "@/components/BenefitsBar";
import { BestSellers } from "@/components/BestSellers";
import { meninosBestSellers, meninasBestSellers } from "@/data/bestSellers";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { PijamasPromo } from "@/components/PijamasPromo";
import { Reviews } from "@/components/Reviews";
import { NewsletterBanner } from "@/components/NewsletterBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <BenefitsBar />
        <BrandsCarousel />
        <BestSellers title="Conjuntos Vendidos para Meninos" items={meninosBestSellers} />
        <BestSellers title="Conjuntos Vendidos para Meninas" items={meninasBestSellers} />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
