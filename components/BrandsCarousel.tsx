"use client";

import Image from "next/image";
import { useRef } from "react";

type Brand = {
  id: string;
  name: string;
  image: string;
};

const brands: Brand[] = [
  { id: "adidas", name: "Adidas", image: "/logo/adidas.png" },
  { id: "pimpolho", name: "Pimpolho", image: "/logo/pimpolho.png" },
  { id: "marca-7", name: "Marca 7" },
  { id: "marca-8", name: "Marca 8" },
  { id: "marca-9", name: "Marca 9" },
  { id: "marca-7", name: "Marca 7" },
  { id: "marca-8", name: "Marca 8" },
  { id: "marca-9", name: "Marca 9" },
];

export function BrandsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByItem = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const item = el.querySelector<HTMLElement>("[data-brand]");
    const amount = (item?.offsetWidth ?? el.clientWidth / 4) + 24;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="relative bg-white py-10" aria-label="Marcas">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center text-xl font-bold uppercase tracking-[0.3em] text-black sm:text-2xl">
          Nossas Marcas
        </h2>
        <div className="mx-auto mt-2 h-1 w-14 bg-black" />
      </div>

      <div className="relative mx-auto mt-8 max-w-7xl px-4 sm:px-8">
        <button
          type="button"
          onClick={() => scrollByItem(-1)}
          aria-label="Ver marcas anteriores"
          className="absolute left-0 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-brand-ink shadow-md transition hover:bg-gray-50"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByItem(1)}
          aria-label="Ver mais marcas"
          className="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 translate-x-1/2 rounded-full bg-white p-2 text-brand-ink shadow-md transition hover:bg-gray-50"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      <div
        ref={scrollRef}
        className="mt-8 flex snap-x snap-mandatory gap-[35px] overflow-x-auto scroll-smooth px-4 pb-2 sm:px-8 lg:justify-center lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {brands.map((brand) => (
          <div key={brand.id} data-brand className="flex shrink-0 snap-start flex-col items-center gap-3">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-gray-300 bg-gray-50 text-xs text-gray-400 sm:h-28 sm:w-28">
              Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
