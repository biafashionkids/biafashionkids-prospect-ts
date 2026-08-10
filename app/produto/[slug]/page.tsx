import { notFound } from "next/navigation";
import { meninosBestSellers, meninasBestSellers } from "@/data/bestSellers";
import { ProductDetail } from "@/components/ProductDetail";

const allProducts = [...meninosBestSellers, ...meninasBestSellers];

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.id }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find((p) => p.id === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
