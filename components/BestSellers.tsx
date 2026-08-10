"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BestSellerItem } from "@/data/bestSellers";

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#F4C21B" aria-hidden="true">
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9L12 3Z" />
    </svg>
  );
}

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}


export function BestSellers({ title, items }: { title: string; items: BestSellerItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? el.clientWidth / 2) + 24;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="relative bg-white py-12" aria-label="Conjuntos mais vendidos">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-black">{title}</h2>
        <div className="mx-auto mt-2 h-1 w-14 bg-black" />
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Ver produtos anteriores"
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-brand-ink shadow-md transition hover:bg-white sm:flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Ver mais produtos"
        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-brand-ink shadow-md transition hover:bg-white sm:flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="mt-8 flex snap-x snap-mandatory gap-x-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-8 lg:gap-x-6 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
          {items.map((item) => (
            <article key={item.id} data-card className="flex w-1/2 shrink-0 snap-start flex-col lg:w-1/4">
              <Link href={`/produto/${item.id}`} className="block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center border border-dashed border-gray-300 text-sm text-gray-400">
                      Foto do produto
                    </div>
                  )}
                  <span className="absolute right-3 top-3 rounded-md bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                    {item.discountPercent}% OFF
                  </span>
                  {item.cottonTag && (
                    <span className="absolute bottom-3 left-0 bg-black px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      100% Algodão
                    </span>
                  )}
                </div>
              </Link>

              <div className="flex flex-1 flex-col pt-3">
                <Link href={`/produto/${item.id}`} className="line-clamp-2 text-sm text-gray-800 hover:underline">
                  {item.name}
                </Link>

                <div className="mt-1 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                  <span className="text-xs text-gray-500">({item.reviewCount})</span>
                </div>

                <p className="mt-2 text-sm text-gray-400 line-through">{formatBRL(item.oldPrice)}</p>
                <p className="text-2xl font-extrabold text-blue-600">
                  {formatBRL(item.price)} <span className="text-sm font-normal">no PIX</span>
                </p>
                <p className="text-xs text-gray-500">{item.installments}</p>

                <button
                  type="button"
                  className="mt-3 w-full rounded-md bg-blue-600 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Comprar
                </button>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
