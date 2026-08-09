import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoryGrid } from "@/components/CategoryGrid";
import { BenefitsBar } from "@/components/BenefitsBar";
import { ProductGrid } from "@/components/ProductGrid";
import { PromoBanner } from "@/components/PromoBanner";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <HeroCarousel />
        <BenefitsBar />
        <CategoryGrid />
        <ProductGrid />
        <PromoBanner />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
