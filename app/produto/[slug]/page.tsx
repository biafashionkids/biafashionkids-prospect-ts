import { notFound } from "next/navigation";
import { meninosBestSellers, meninasBestSellers } from "@/data/bestSellers";
import { ProductDetail } from "@/components/ProductDetail";

const allProducts = [...meninosBestSellers, ...meninasBestSellers];

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
