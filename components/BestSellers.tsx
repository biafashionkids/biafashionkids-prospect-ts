"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BestSellerItem } from "@/data/bestSellers";

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20s-7.5-4.6-10-9.3C.4 7 2.3 3.5 6 3.5c2 0 3.6 1.1 4.5 2.6.9-1.5 2.5-2.6 4.5-2.6 3.7 0 5.6 3.5 4 7.2C19.5 15.4 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BestSellerCard({ item }: { item: BestSellerItem }) {
  const [qty, setQty] = useState(1);

  return (
    <article data-card className="flex w-1/2 shrink-0 snap-start flex-col lg:w-1/4">
      <div className="relative">
        <Link href={`/produto/${item.id}`} className="block">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-brand-pink-50">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center border border-dashed border-gray-300 text-sm text-gray-400">
                Foto do produto
              </div>
            )}
          </div>
        </Link>
        <button
          type="button"
          aria-label={`Favoritar ${item.name}`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center text-gray-400 transition hover:text-brand-pink-500"
        >
          <HeartIcon />
        </button>
      </div>

      <div className="flex flex-1 flex-col pt-4 text-center">
        <Link href={`/produto/${item.id}`} className="text-sm text-black hover:underline sm:text-base">
          {item.name}
        </Link>

        <div className="mt-auto pt-3">
          <p className="text-2xl font-extrabold text-black sm:text-3xl">{formatBRL(item.price)}</p>
          <p className="mt-1 text-xs text-black/50 sm:text-sm">{item.installments}</p>
        </div>

        <div className="mt-4 flex items-stretch gap-2 sm:gap-3">
          <div className="flex h-10 items-center rounded-lg border border-black/15 sm:h-11">
            <button
              type="button"
              aria-label="Diminuir quantidade"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-full w-9 items-center justify-center text-black/60 transition hover:text-black sm:w-10"
            >
              −
            </button>
            <span className="w-5 text-center text-sm font-semibold text-black">{qty}</span>
            <button
              type="button"
              aria-label="Aumentar quantidade"
              onClick={() => setQty((q) => q + 1)}
              className="flex h-full w-9 items-center justify-center text-black/60 transition hover:text-black sm:w-10"
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="h-10 flex-1 rounded-lg bg-brand-pink-300 text-sm font-bold text-white transition hover:bg-brand-pink-400 sm:h-11"
          >
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
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
        className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-gray-500 shadow-sm transition hover:bg-gray-200 sm:flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Ver mais produtos"
        className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-gray-500 shadow-sm transition hover:bg-gray-200 sm:flex"
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
          <BestSellerCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
