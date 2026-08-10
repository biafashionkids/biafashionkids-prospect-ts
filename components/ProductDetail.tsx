"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { BestSellerItem } from "@/data/bestSellers";

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#F4C21B" aria-hidden="true">
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9L12 3Z" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PixIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9.5 4.5 4.5 9.5a1 1 0 0 0 0 1.4l1.4 1.4M14.5 19.5l5-5a1 1 0 0 0 0-1.4l-1.4-1.4M4.5 14.5l1.4 1.4a3 3 0 0 0 4.2 0l1.9-1.9a1.5 1.5 0 0 1 2.1 0l1.9 1.9M19.5 9.5l-1.4-1.4a3 3 0 0 0-4.2 0l-1.9 1.9a1.5 1.5 0 0 1-2.1 0L8 8.1"
        stroke="#00B2A9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function HangerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4a2 2 0 1 1 2 2c-.2.6-.9 1-1.5 1.4L20 12c1 .6.7 2-.4 2H4.4c-1.1 0-1.4-1.4-.4-2l7.5-4.6C10.9 7 10.2 6.6 10 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 17.5h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function RulerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 7v3M11 7v3M15 7v3M19 7v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 7h11v9H2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M13 10h4l3 3v3h-7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20s-7.5-4.6-10-9.3C.4 7 2.3 3.5 6 3.5c2 0 3.6 1.1 4.5 2.6.9-1.5 2.5-2.6 4.5-2.6 3.7 0 5.6 3.5 4 7.2C19.5 15.4 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SIZES = ["2", "3", "6", "8", "10", "12", "14"];
const PROMO_NAME = "CONJUNTOS INVERNO 2026";
const CATEGORY_LABEL = "Conjuntos Inverno";

export function ProductDetail({ product }: { product: BestSellerItem }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState("");

  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-gray-500 sm:px-8">
          <Link href="/" className="hover:text-black">
            Home
          </Link>{" "}
          <span className="mx-1">{">"}</span>
          <span>{product.gender.toUpperCase()}</span>
          <span className="mx-1">{">"}</span>
          <span>{CATEGORY_LABEL}</span>
          <span className="mx-1">{">"}</span>
          <span className="text-black">{product.name}</span>
        </div>

        <div className="border-y border-gray-200 bg-gray-50">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-4 sm:flex-row sm:items-center sm:px-8">
            <p className="text-sm text-gray-700">
              Esse produto faz parte da promoção <span className="font-bold text-black">{PROMO_NAME}</span>
            </p>
            <Link
              href="/"
              className="flex items-center gap-1 whitespace-nowrap rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-white"
            >
              Confira a Lista
              <ChevronRightIcon />
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
          <h1 className="text-center text-2xl font-bold text-black sm:text-3xl">{product.name}</h1>
          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviewCount}) - Faça uma avaliação</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[80px_1fr_420px]">
            <div className="hidden lg:flex lg:flex-col lg:gap-3">
              <div className="relative h-20 w-20 overflow-hidden border-2 border-black">
                {product.image && <Image src={product.image} alt={product.name} fill className="object-cover" />}
              </div>
            </div>

            <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center border border-dashed border-gray-300 text-sm text-gray-400">
                  Foto do produto
                </div>
              )}
              <span className="absolute left-3 top-3 rounded-md bg-blue-600 px-3 py-1 text-sm font-bold text-white">
                {product.discountPercent}% OFF
              </span>
            </div>

            <div>
              <p className="text-xs text-gray-500">SKU: {product.sku}</p>

              <p className="mt-3 text-sm text-gray-500">
                de <span className="line-through">{formatBRL(product.oldPrice)}</span> por
              </p>
              <div className="mt-1 flex items-center gap-2">
                <PixIcon />
                <span className="text-3xl font-extrabold text-blue-600">{formatBRL(product.price)}</span>
              </div>
              <p className="text-sm text-gray-500">no PIX</p>

              <div className="mt-3 flex items-center gap-3 rounded-md border border-gray-200 p-3">
                <CardIcon />
                <p className="text-sm text-black">
                  {formatBRL(product.price)}
                  <br />
                  no cartão em até <span className="font-bold">1x</span> de {formatBRL(product.price)} sem juros
                </p>
              </div>

              <button type="button" className="mt-3 text-sm font-semibold text-blue-600 underline">
                + formas de pagamento
              </button>

              <p className="mt-6 text-sm font-bold text-black">Tamanho:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-semibold transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 text-black hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <button type="button" className="flex items-center gap-1.5 hover:text-black">
                  <HangerIcon /> Descubra seu tamanho
                </button>
                <button type="button" className="flex items-center gap-1.5 hover:text-black">
                  <RulerIcon /> Tabela de medidas
                </button>
              </div>

              <div className="mt-6 flex items-stretch gap-3">
                <div className="flex items-center gap-3 rounded-md border border-gray-300 px-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Diminuir quantidade"
                    className="text-lg font-bold text-black"
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-sm font-semibold text-black">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Aumentar quantidade"
                    className="text-lg font-bold text-black"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="flex-1 rounded-md bg-green-600 py-3 text-base font-bold text-white transition hover:bg-green-700"
                >
                  COMPRAR
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-700">
                Veja mais produtos da marca{" "}
                <Link href="/" className="font-bold text-black underline">
                  Bia Fashion Kids
                </Link>
              </p>

              <div className="mt-4 flex items-center gap-3 rounded-md border border-gray-200 p-3">
                <TruckIcon />
                <div className="flex-1">
                  <p className="text-sm font-bold text-black">Calcule o frete</p>
                  <p className="text-xs text-gray-500">Não sei o meu CEP</p>
                </div>
                <input
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  placeholder="00000-000"
                  className="w-28 rounded-md border border-gray-300 px-2 py-1.5 text-sm text-black focus:outline-none"
                />
                <button type="button" className="rounded-md bg-black px-3 py-1.5 text-sm font-bold text-white">
                  OK
                </button>
              </div>

              <button type="button" className="mt-4 flex items-center gap-2 text-sm text-gray-700 hover:text-black">
                <HeartIcon /> Adicionar aos favoritos
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
